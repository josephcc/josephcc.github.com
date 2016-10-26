---
layout: post
title: "TermMine"
subtitle: "Learning to Find Translations and Transliterations on the Web"
date: 2012-07-08 08:00
comments: true
toc: true
lsi: true
categories: ['ACL', 'NLP', 'Information Extraction', 'Translation', 'Machine Learning']
span: 6
project: true
---


Joseph Chee Chang, Jason S. Chang, and Roger Jang. ***ACL 2012.***

TermMine is an information extraction system that can automatically mine
translation pairs of terms from the web. We used a small set of terms and
translations to gather mixed-code text from the web to train a CRF model that
can identify translation pairs at run-time.

<!--more-->

Abstract
----------------------
In this paper, we present a new method for learning to finding translations and
transliterations on the Web for a given term. The approach involves using a
small set of terms and translations to obtain mixed-code snippets from a search
engine, and automatically annotating the snippets with tags and features for
training a conditional random field model. At run-time, the model is used to
extracting translation candidates for a given term. Preliminary experiments and
evaluation show our method cleanly combining various features, resulting in a
system that outperforms previous work.

Download
----------------------
<a class="btn btn-default" href="#" role="button">PDF DL (coming soon)</a>
<a class="btn btn-default" href="http://www.aclweb.org/anthology/P12-2026" role="button">ACLWeb DL</a>
<a class="btn btn-default" href="http://dl.acm.org/citation.cfm?id=2390665.2390698" role="button">ACM DL</a>

Citation
----------------------

```
Joseph Z. Chang, Jason S. Chang, and Jyh-Shing Roger Jang. 2012.
Learning to find translations and transliterations on the web.
In Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics: Short Papers - Volume 2 (ACL '12), Vol. 2.
Association for Computational Linguistics, Stroudsburg, PA, USA, 130-134.
```

Bibtex
----------------------
```
@inproceedings{Chang:2012:LFT:2390665.2390698,
 author = {Chang, Joseph Z. and Chang, Jason S. and Jang, Jyh-Shing Roger},
 title = {Learning to Find Translations and Transliterations on the Web},
 booktitle = {Proceedings of the 50th Annual Meeting of the Association for Computational Linguistics: Short Papers - Volume 2},
 series = {ACL '12},
 year = {2012},
 location = {Jeju Island, Korea},
 pages = {130--134},
 numpages = {5},
 url = {http://dl.acm.org/citation.cfm?id=2390665.2390698},
 acmid = {2390698},
 publisher = {Association for Computational Linguistics},
 address = {Stroudsburg, PA, USA},
} 
```
