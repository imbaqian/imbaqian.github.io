---
layout: post
title: Multiprocessing Guildelines
---

{{ page.title }}

<p class="meta">2017-7-26 府谷-家 </p>

# Programming guildelines
---
简单的翻译了一下，还有一些没看懂没翻译...
---
这是在使用multiprocessing之前的指南和习惯

### Avoid shared state 避免使用共享状态

尽可能避免在进程之间传递大量的数据。

最好坚持是要用queues或者pipes在进程之间通信，而不是使用低等级的同步原语。

### Picklability

确保函数的参数是picklable

### Thread safety of proxies 代理线程安全

不要在超过一个线程里使用代理对象，除非你用锁

（在不同的线程里使用相同的代理是不会有问题的）

### Joining zombie processes 

在UNIX中，当一个进程结束了但是没有被join，这个进程将会成为僵尸进程。僵尸进程不会有太多，因为每次一个进程开始，所有运行完的但没有join的进程将被join。当调用一个运行完的进程的Process.is_alive时，
该进程将被join。明确的join一个进程是一个好的习惯。

### Better to inherit than pickle/unpickle 最好用继承而不是序列化/反序列化

当使用spawn或forkserver来启动一个方法，许多multiprocessing的类型需要是可序列化的，那样他们的子进程就可以使用了。然而，我们应该避免用pipes或queue传送共享对象。相反，你应该安排程序，这样一个进程需要访问共享资源就可以从它的祖先进程继承了。

### Avoid terminating processes 避免结束进程

使用Process.terminate方法结束一个进程容易导致正在使用的共享资源（例如锁，信号量，管道，队列等）被损坏或者无法被其他进程使用。

Process.terminate最好用在那些没有使用共享资源的进程。

### Joining processes that use queues

记住，一个进程在queue中放入资源，必须等到消费这个资源的程序结束。

也就是，当你在queue中放入东西后，必须等到queue中的东西出去后才能join你的进程。不然你不能确保你放东西在queue的进程会结束。也记住non-daemonic进程会被自动join。

一个死锁的例子：
{% highlight Python %}
from multiprocessing import Process, Queue

def f(q):
    q.put('X' * 1000000)

if __name__ == '__main__':
    queue = Queue()
    p = Process(target=f, args=(queue,))
    p.start()
    p.join()                    # this deadlocks
    obj = queue.get()
{% endhighlight %}

将最后两行交换就可以解决死锁

### 明确的传递资源到子进程

在Unix上使用fork方法时，子进程能使用在父进程中创建的共享资源，然而最好通过参数的方式传递这些资源到子进程。

除了让代码兼容Windows，这样做能使得这些资源在子进程中存活，父进程不会将这些资源回收。如果父进程释放这些公共资源，这样做是很重要的。

{% highlight Python %}
from multiprocessing import Process, Lock

def f():
    ... do something using "lock" ...

if __name__ == '__main__':
    lock = Lock()
    for i in range(10):
        Process(target=f).start()
{% endhighlight %}


{% highlight Python %}
from multiprocessing import Process, Lock

def f(l):
    ... do something using "l" ...

if __name__ == '__main__':
    lock = Lock()
    for i in range(10):
        Process(target=f, args=(lock,)).start()

{% endhighlight %}

### 谨防用文件对象替换sys.stdin

multiprocessing原本无条件的叫做:

{% highlight Python %}
os.close(sys.stdin.fileno())
{% endhighlight %}

在multiprocessing.Process._bootstrap()中，这导致了进程中的问题。变成了:

{% highlight Python %}
sys.stdin.close()
sys.stdin = open(os.open(os.devnull, os.O_RDONLY), closefd=False)
{% endhighlight %}

Which solves the fundamental issue of processes colliding with each other resulting in a bad file descriptor error, but introduces a potential danger to applications which replace sys.stdin() with a “file-like object” with output buffering. This danger is that if multiple processes call close() on this file-like object, it could result in the same data being flushed to the object multiple times, resulting in corruption.

If you write a file-like object and implement your own caching, you can make it fork-safe by storing the pid whenever you append to the cache, and discarding the cache when the pid changes. For example:

{% highlight Python %}
@property
def cache(self):
    pid = os.getpid()
    if pid != self._pid:
        self._pid = pid
        self._cache = []
    return self._cache
{% endhighlight %}

## spawn和forkserver启动方法

这些限制不适用于fork方法。

### 更多picklablity

确保Process.\_\_init\_\_()的参数是picklable。这意味着绑定和解绑方法不能直接用在target（除非你用fork方法）——定义一个函数来替代。

如果你继承Process然后确保实例是picklable，当你调用Process.start

### Global variables

切记如果子进程访问一个全局变量，它有可能和父进程中的值不一样。

当全局变量是模块级别的常量是没问题的。

### Safe importing of main module

确保main模块被安全的导入一个新的Python解释器，这样不会导致一些副作用。

例如，使用spawn或forkserver启动一个进程会有RuntimeError：

{% highlight Python %}
from multiprocessing import Process

def foo():
    print('hello')

p = Process(target=foo)
p.start()
{% endhighlight %}

使用if \_\_name\_\_ == '\_\_main\_\_':

{% highlight Python %}
from multiprocessing import Process, freeze_support, set_start_method

def foo():
    print('hello')

if __name__ == '__main__':
    freeze_support()
    set_start_method('spawn')
    p = Process(target=foo)
    p.start()
{% endhighlight %}