---
layout: post
title:  自省(introspection) 与 反射(reflection)
tags: [计算机科学]
---

{{ page.title }}

## [自省](https://en.wikipedia.org/wiki/Type_introspection)

自省是在运行时检查对象类型或属性的能力。

### 举个例子
C++

{% highlight cpp %}
Person *p = dynamic_cast<Person*>(obj);
if(p != nullptr){
    p->walk();
}
{% endhighlight %}

Python

{% highlight python %}
class Foo(object):
    def __init__(self, val):
        self.x = var
    def bar(self):
        return self.x

>>> dir(Foo(5))

['__class__', '__delattr__', '__dict__', '__doc__', '__getattribute__',
11 '__hash__', '__init__', '__module__', '__new__', '__reduce__', '__reduce_ex__',
12 '__repr__', '__setattr__', '__str__', '__weakref__', 'bar', 'x']
{% endhighlight %}


## [反射](https://en.wikipedia.org/wiki/Reflection_(computer_programming))

反射是计算机程序在运行时检查，自省和修改自己的结构和

### 举个例子

Python

{% highlight Python %}
# without reflection
obj = Foo()
obj.hello()

# with reflection
class_name = "Foo"
method = "hello"
# globals()返回一个全局变量的字典，包括所有变量和函数名称，
# globals()[class_name] 相当于返回Foo
obj = globals()[class_name]() 
getattr(obj, method)

# with eval , eval将字符串当成有效的表达式来求值并返回结果
eval("Foo().hello()")

{% endhighlight %}