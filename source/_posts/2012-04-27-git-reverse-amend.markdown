---
layout: post
title: "Git: Remove (un-add) files from last commit"
date: 2012-04-27 03:07
comments: true
toc: false
categories: ['git']
---

A lot of times we use `git commit --amend` to add the files that we have forgotten to the last
commit (usually HEAD), or simply to fix typos in its commit message. However, you can't remove, or un-add,
committed files from the latest commit with `git commit --amend`. Here's how:

<!-- more -->

- Point your HEAD to the commit prior to the latest commit, without touching the index nor the working
tree: 

{% codeblock lang:bash %}

git reset --soft HEAD

{% endcodeblock %}

- Now your `HEAD` points to the commit prior to the lastest commit, your `ORIG_HEAD` points to the latest
commit, and your working tree and staging area is the same as the latest commit. Now we unstage all the
changes from the staging area (or index), and add the files you originally intended to commit:

{% codeblock lang:bash %}

git reset HEAD .    
git add <files>

{% endcodeblock %}


- Finally, commit the staged files and reuse the metadata of the wrong commit:

{% codeblock lang:bash %}

git commit -c ORIG_HEAD

{% endcodeblock %}

 you can always you `git rebase` to turn back time.
