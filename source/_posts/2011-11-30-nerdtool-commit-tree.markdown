---
layout: post
title: "Git: Displaying commit tree with NerdTool"
date: 2011-11-30 17:26
comments: true
toc: false
lsi: true
categories: ['git', 'mac']
---

<a href="http://www.flickr.com/photos/bizkit/6291809011/" title="P1030408 by bizkit@tw, on Flickr"><img
src="http://farm7.staticflickr.com/6233/6291809011_58ca7d80bc.jpg" width="500" height="347"
alt="P1030408"></a>

I was in a private hackathon with [ftt](http://www.facebook.com/itsftt) and
[Zero](http://www.facebook.com/itszero) last weekend, coding a new Android Taipei tour guide app, and we
were looking for a way to display in real-time our commit tree on a big screen. We ended up using
NerdTool to render the commit tree. Not only did the result looks pretty cool, it has also proven to be
quite helpful when trying to rebase/merge different branches.

<!-- more -->

這幾天和 ftt 跟 傑洛 聚在一起 hackthon ， 想了一個方法用大螢幕即時顯示 git 的 commit
tree，看起來很有趣， 在 merge 不同 branch 的時候也十分實用。 我們用的程式是 NerdTool，它跟 GeekTool
類似， 是一個可以把任一 command 的 output 顯示在桌面上。 我最早是在 LifeHacker 發現的， 最大的差別在
NerdTool 可以正確的顯示 ASCII colors。

<a href="http://www.flickr.com/photos/bizkit/6291810655/" title="P1030409 by bizkit@tw, on Flickr"><img
src="http://farm7.staticflickr.com/6219/6291810655_0dbd160a39.jpg" width="500" height="375"
alt="P1030409"></a>

[NerdTool](http://mutablecode.com/apps/nerdtool) is an application that allows you to display shell
script output on your desktop, and unlike the popular
[GeekTool](http://projects.tynsoe.org/en/geektool/), NerdTool support ASCII colors.

<a href="http://www.flickr.com/photos/bizkit/6291810655/" title="P1030409 by bizkit@tw, on Flickr"><img
src="http://farm7.staticflickr.com/6219/6291810655_0dbd160a39.jpg" width="500" height="375"
alt="P1030409"></a>

So we've clone an additional copy of our git repo from BitBucket, and set NerdTool to run `git pull` and
`git log` every five seconds:

我們先從 bitbucket 上另外 clone 了一份 repo 下來專門用來 watch commit 的變動， 接著讓 NerdTool
三秒跑一次 git pull 並用樹狀圖顯示 log 在桌面上：


{% codeblock lang:bash %}

cd ~/.gitwatch/<repo_name> ; 
git pull 2>&1 > /dev/null ;
date ; 
git logpretty | head -47

{% endcodeblock %}

<a href="http://www.flickr.com/photos/bizkit/6291827075/" title="Screen Shot 2011-10-30 at 2.11.47 AM by
bizkit@tw, on Flickr"><img src="http://farm7.staticflickr.com/6056/6291827075_442edc4367.jpg"
width="500" height="461" alt="Screen Shot 2011-10-30 at 2.11.47 AM"></a>

`git logpretty` is my git alias, setup as following:
git 設定的 alias:

{% codeblock lang:bash %}

logpretty = log --abbrev-commit \ 
--decorate --graph --color --date-order \
--pretty= \ 
"format:%Cblue%h\%Cred%an:%Creset\"%Cgreen%s%Cblue\"\ %Creset%ar" 

{% endcodeblock %}

The final result:

<a href="http://www.flickr.com/photos/bizkit/6291957695/" title="gggg by bizkit@tw, on Flickr"><img
src="http://farm7.staticflickr.com/6226/6291957695_915e406f17_z.jpg" width="640" height="400"
alt="gggg"></a>






