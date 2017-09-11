---
layout: post
title: range and xrange
---

{{ page.title }}

<p class="meta">2017-9-11 府谷-家 </p>

# Python2.x
---
## range

range(1,10) 生成一个list[1,10)

## xrange

xrange(1,10) 是一个Generator，相比range更节省空间

# Python3.x
---
> Renames xrange() to range() and wraps existing range() calls with list.

xrange 改名为 range，用list(range())来调用以前的range