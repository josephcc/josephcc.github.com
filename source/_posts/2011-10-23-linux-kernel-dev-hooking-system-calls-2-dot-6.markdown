---
layout: post
title: "Linux Kernel: Hooking System Calls on 2.6+"
date: 2011-10-23 22:03
toc: true
comments: true
categories: [linux, kernel]
---


This post explains how to add, or override, system calls by loading custom
kernel modules using system call hooking techniques. The mechanism is not
difficult to understand, you basically need to find the location of the kernel
system call table, override an entry with a function inside your kernel module.
At the end of you function you call the original system call and return with its
returned value, so that user-space processes is not aware of any changes. This
is sometimes called system call hijacking, and is used by viruses and rootkits.
This is a very dangerous technique since every process running on the machine
will be effected. So obviously Linux kernel does not reveal the location of the
call table to kernel modules. This post is not intended to explain how to
exploit the kernel to find the location of the call table, but rather recompiles
the kernel once to reveal the location for an alternative development process.
With the ability to hook system calls, you won't need to recompile and reboot
the kernel every time you want to change something, you can simply reload the
kernel module.

<!-- more -->

What I actually did was that I added a new system call to the kernel first,
expose the system call table, and dynamically hooking my system call by loading
kernel modules at runtime.

修課的作業要求在核心新增一個 system call
提供一個分析記憶體狀態的介面，不過助教學長說我們也可以寫成 kernel
module，於是便起了在 kernel module 中寫 system call
的想法。查了一下，要達到這樣的效果要靠 system call hooking 來達成，也就是去
hijack 目前存在的 system call，讓所有程式在呼叫該 system call 時都會變成執行到
module 中的某個 function，該 function 最後會再去呼叫正常的 system call routine。

目前的計畫是在 kernel 中新增一個 system call 來給自己的 module 來
hijack，不知道會不會是很沒有道理開發模式。
這是篇是今晚的筆記，雖然內容不多，但在精神不濟的時刻，相信我更需要做點筆記。:p

Adding a new system call
-------------------------
There are already many tutorials that explain how to add system calls to the
kernel. The ones I read are [the tutorial from Advance Defence Lab][1] in
Chinese and [The Linux Kernel Module Programming Guide][2] in English.

今天讀了幾篇簡單的 tutorial，分別是介紹如何新增 system call 以及撰寫自己的
kernel module。並實際寫了一個簡單的 hello world kernel module。不得不說「寫
syscall 與 kernel
module」或許聽起來很嚇人，但其實不難入門。當然真正難的一定是在入門之後。

新增 system call 的部份看了實驗室學長以及阿怪寫的兩篇 tutorial [1]
，大概了解一下狀況，後來參考 The Linux Kernel Module
Programming Guide [2] 寫了一個簡單的 hello world 模組。

Exposing the system call table
-------------------------------

Even though starting from 2.6, the kernel no longer exposes `sys_call_table` to
modules, there are probably techniques you can use [exploits][3] to find it. On
your own machine, the easiest way is to add the following lines to the kernel
(`arch/x86/kernel/i386_ksyms_32.c`) and boot into the recompiled kernel:

在 2.6 版本的核心中，為了保護系統免於 kernel rootkit 的攻擊， `sys_call_table`
不再能被 kernel module 中所任意存取。在 insmod 的時候便會發生 symbol not found
的錯誤而失敗。雖然還是有許多 hacking 方式可以取的 `sys_call_table`
[3]，但本人實在白的發亮（又弱的可以），所以直接修改 kernel 的程式碼來把
`sys_call_table` export 成 global。只要在 arch/x86/kernel/i386_ksyms_32.c
加入以下兩行就可以了：

{% codeblock lang:c%}

extern void* sys_call_table[];
EXPORT_SYMBOL(sys_call_table);

{% endcodeblock %}

Now kernel modules will be able to access system call table via
`sys_call_table`. However, in many distro, the table is in read only stats, so
make sure you also have the following in your kernel `.config` file.

如此一來，kernel module 內便可以存取 `sys_call_table`。但在 2.6 許多 distro
預設的狀況下 system call table 是唯讀的，因此在上述的第二步便會失敗。只要在
.config 裡將 CONFIG_DEBUG_RODATA 設為 n 後便可以成功的 hook 到 system calls。


{% codeblock lang:c%}
CONFIG_DEBUG_RODATA=n
{% endcodeblock %}

System call hooking
-----------------------

Finally, the actual syscall hooking process is done in a kernel module with the
following code:

System call hooking 的機制是在 kernel module 中，透過 sys_call_table
這個陣列來取得某個 syscall 的位置。備份後，將其改為自行撰寫的
function。用程式碼的方式來呈現或許會更清楚：


{% codeblock lang:c%}
original_sys_exit = sys_call_table[__NR_exit]; 
sys_call_table[__NR_exit] = fake_exit_function;
{% endcodeblock %}

The above code locates the location of the `exit()` system call, backs up to
`original_sys_exit`, and overwrites it with `fake_exit_function` pointer. At the
end of the `fake_exit_function()` a function all to the original `exit()` is
made, so that the user-space process can terminate correctly. More information
on system call hooking can be found on [Linux Journal][4]

指到自行撰寫的 function
接著，在 our_fake_exit_function 撰寫要 hook 的程式碼，並在 function
結束前呼叫備份的 original_sys_exit 便完成 hooking 的動作。詳細的 System call
hooking 步驟以及範例可以在 Linux Journal 的一篇文章[4]中找到。



References
------------------
1. http://140.120.13.13/~s9356048/OSLab/
2. http://tldp.org/LDP/lkmpg/2.6/html/lkmpg.html
3. http://www.epanastasi.com/?page_id=52
4. http://www.linuxjournal.com/article/4378

[1]: http://140.120.13.13/~s9356048/OSLab/
[2]: http://tldp.org/LDP/lkmpg/2.6/html/lkmpg.html
[3]: http://www.epanastasi.com/?page_id=52
[4]: http://www.linuxjournal.com/article/4378
