---
layout: post
title: Python with expression as target
---

{{ page.title }}

<p class="meta">2017-7-10 府谷-家 </p>

# with expression as target:

类似于C++的RAII(Resource Acquisition Is Initialization，资源获取就是初始化)
C++标准保证在任何情况下，已构造的对象最终会销毁，即它的西沟函数最终会被调用。也就是说在构造一个对象时候获取资源，在对象生命周期结束时候释放资源(析构)。

{% highlight python %}
with VAR = EXPR:
    BLOCK
{% endhighlight %}

之后被解释为:

{% highlight Python %}
VAR= EXPR:
VAR.__enter__()
try:
    BLOCK
finally:
    VAR.__exit__()
{% endhighlight %}

举个例子:
{% highlight Python %}
with open(filename) as fp:
    BLOCK1
BLOCK2
{% endhighlight %}

通过fp.closed成员可以看到:
    BLOCK1中，fp是打开的
    BLOCK2中，fp是关闭的

类似的还有 with lock: 锁 等等...

##context manager 上下文管理器

暂时改变当前目录，然后返回使用前目录
{% highlight Python %}
from contextlib import contextmanager
import os

@contextmanager
def working_directory(path):
    current_dir = os.getcwd()
    os.chdir(path)
    try:
        yield
    finally:
        os.chdir(current_dir)

with working_directory("data/stuff"):
    # do something within data/stuff
# here I am back again in the original working directory
{% endhighlight %}

暂时重定向sys.stdin,sys.stdout and sys.stderr到其他文件描述符，然后还原。
{% highlight Python %}
from contextlib import contextmanager
import sys

@contextmanager
def redirected(**kwds):
    stream_names = ["stdin", "stdout", "stderr"]
    old_streams = {}
    try:
        for sname in stream_names:
            stream = kwds.get(sname, None)
            if stream is not None and stream != getattr(sys, sname):
                old_streams[sname] = getattr(sys, sname)
                setattr(sys, sname, stream)
        yield
    finally:
        for sname, stream in old_streams.iteritems():
            setattr(sys, sname, stream)

with redirected(stdout=open("/tmp/log.txt", "w")):
     # these print statements will go to /tmp/log.txt
     print "Test entry 1"
     print "Test entry 2"
# back to the normal stdout
print "Back to normal stdout again"
{% endhighlight %}

生成一个暂时文件夹，用完之后删除
{% highlight  Python %}
from tempfile import mkdtemp
from shutil import rmtree

@contextmanager
def temporary_dir(*args, **kwds):
    name = mkdtemp(*args, **kwds)
    try:
        yield name
    finally:
        shutil.rmtree(name)

with temporary_dir() as dirname:
    # do whatever you want
{% endhighlight %}
