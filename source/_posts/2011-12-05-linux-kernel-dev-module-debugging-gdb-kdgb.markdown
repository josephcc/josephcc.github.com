---
layout: post
title: "Linux Kernel: Module debugging with gdb"
date: 2011-12-05 21:12
comments: true
toc: false
lsi: true
categories: ['linux', 'kernel']
---

This is post continues my previous post on 
[Kernel Debugging with gdb](http://joe.cat/blog/2011/10/17/linux-kernel-dev-debug-qemu-kgdb/),
and explain how to do the same for debugging kernel modules.

<!-- more -->

此篇文章延續前文 ，簡單介紹如何使用 gdb / kgdb 對核心模組 (kernel module)
進行即時的 debugging。

The previous post explained how to use QEMU, kgdb and gdb to debug the Linux
kernel in realtime. Adding parameters to `.config`, debug information is
included in `vmlinux`, so that in gdb you can press `l` to list currently
running kernel codes. However, kernel modules are dynamically loaded, even with
the `-g` compile flag, the debug information is not loaded with `vmlinux`
into gdb.

在先前的文章中，介紹了如何使用 qemu、kgdb、gdb 對核心進行動態的
debugging，並在編譯核心時在 vmlinux 中包含 debug information，使 debug
時能夠直接瀏覽原始碼以及對變數進行存取。然而，kernel module
是在核心之外的，因次就算編譯時加上 -g GCCFLAG 也無法直接在 gdb 中存取其
debug information。

To solve this issue, we need to use the `add-symbol-file` to let gdb read
additional debug information. Since in my setup, gdb and the dynamically
loaded kernel module are executing on different machines, there's no way for gdb
to know kernel module's location in the memory after executing `insmod`. Here's
my solution:

要解決這個問題，需要使用 gdb 中的 add-symbol-file 命令來讀入包含 debug
information 的 kernel module。gdb 與核心、模組是執行在完全不同的電腦上，因次
gdb 是無法直接得知 insmod 之後 kernel module 被載入到記憶體中的位置，也讓
module debugging 變得比較 tricky 一點。以下是我的作法：


1. In the kernel module, add a break point stub in `init_module`, so that the
kernel is immediately stopped when the module is loaded for us to add more break
points.
2. When compiling the module, use `-g -O0` to produce debug information and
prevent optimization.
3. With the VM connected to gdb, use `insmod` to load the module. The VM will
stop at `init_module`, use `c` in gdb to continue running the kernel for now.
4. You can now find the module's location in memory in the file
`/sys/modules/<module_name>/sections/.text`. Copy it, and use other break points
to stop the kernel without reloading the module.
5. In gdb, execute `add-symbol-file <module> <location>` to load the debug
information.

<a href="http://www.flickr.com/photos/bizkit/5233432557/" title="Screen shot
2010-12-05 at 4.55.43 PM by bizkit@tw, on Flickr"><img
src="http://farm6.staticflickr.com/5163/5233432557_a05d118698_z.jpg" width="640"
height="266" alt="Screen shot 2010-12-05 at 4.55.43 PM"></a>

Now you can list and step through module code in gdb.

Ref: http://www.linuxjournal.com/article/4525?page=0,1

