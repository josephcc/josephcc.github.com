---
layout: post
title: "Commend Line Android Development with VIM and Eclim"
date: 2011-08-04 21:05
comments: true
categories: android, vim, console
---

Eclipse is slow, especially on Macs. Plus, I've never really like IDEs very much.
I've always prefer to write my Android projects in the terminal with Vim.
Here are some of the basics stuff about developing Android using CLI.

<!--more-->

<a title="Flickr 上 bizkit@tw 的 Screen shot 2010-05-09 at 1.17.54 AM" href="http://www.flickr.com/photos/bizkit/4589099349/" target="_blank"><img src="http://farm5.static.flickr.com/4012/4589099349_6fa0f191d6_z_d.jpg" alt="Screen shot 2010-05-09 at 1.17.54 AM"></a>

The basics
------------
Some useful commands...

Create projects:
```
android create project —target [ver] —package [x.y.z] —activity [name] —path [dir]
```

Update your Eclipse projects for CLI deveopment:
```
android update project -p [dir]
```

Use vim / emacs to write code, and compile / deploy with ant:
```
ant clean
ant install
ant uninstall
```

View runtime log:
```
adb log
```

Eclim
----------------
With [Eclim](http://www.eclim.org) you can have most of the Eclipse functionalities inside your vim, 
including code-completion and real-time validation. Eclim is basically Eclipse running in headless
mode that communicates with a vim plugin. So you have your favorite vim for frontend interface, and 
Eclipse as the backend for different functions.

<a title="Flickr 上 bizkit@tw 的 Screen shot 2010-05-09 at 1.48.11 AM" href="http://www.flickr.com/photos/bizkit/4589099635/" target="_blank"><img src="http://farm5.static.flickr.com/4044/4589099635_00d2eb9801_z_d.jpg" alt="Screen shot 2010-05-09 at 1.48.11 AM"></a>

On the left there's the Project Tree showing all the files in your project, 
and on the right there are two source code files opened in split view. Installation is pretty simple,
same as Eclipse, all major platforms are supported. Run `eclimd` before executing vim, and use 
`C-x C-u` for automatic code completion in vim.

<a title="Flickr 上 bizkit@tw 的 Screen shot 2010-05-09 at 1.25.48 AM" href="http://www.flickr.com/photos/bizkit/4589099437/" target="_blank"><img src="http://farm5.static.flickr.com/4068/4589099437_9e48220207_o.png" alt="Screen shot 2010-05-09 at 1.25.48 AM"></a>

Syntax is also validated in real-time:

<a title="Flickr 上 bizkit@tw 的 Screen shot 2010-05-09 at 1.38.41 AM" href="http://www.flickr.com/photos/bizkit/4589099509/" target="_blank"><img src="http://farm4.static.flickr.com/3301/4589099509_3778486be9_o.png" width="555" height="225" alt="Screen shot 2010-05-09 at 1.38.41 AM"></a>

Here are some of the basic Eclim commands:
```
:ProjectList
:ProjectOpen [proj]
:ProjectInfo [proj]
:ProjectTree [proj]
:ProjectCD   [proj]  // change directory
:Ant [...]           // compiling and deploying
:Validate
```

More commands are listed in `~/.vim/eclim/doc/translations/<lang>/vim/cheatsheet.txt`
Obviously, you need to add your projects to Eclipse in order for this to work, and as Eclipse, 
Eclim is also not very fast.

Happy hacking~

