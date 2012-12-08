---
layout: page
title: "WikiSense"
date: 2012-12-08 15:53
comments: true
sharing: true
footer: true
---

Citation
------------------

{% bibtex %}
@InProceedings{Chang-EtAl:2009:PACLIC2009,
  author    = {Joseph Chang and Richard Tzong-Han Tsai and Jason S. Chang},
  title     = {WikiSense: Supersense Tagging of Wikipedia Named Entities Based WordNet},
  booktitle = {Proceedings of the 23rd Pacific Asia Conference on Language, Information and Computation (PACLIC)},
  year      = {2009},
  month     = {December},
  address   = {Hong Kong, China},
  pages     = {72--81},
  url       = {http://www.aclweb.org/anthology/Y09-1009}
}
{% endbibtex %}


Examples
------------------------

```
ID        Supersense    Par. Exp.    Title                                Note
----------------------------------------------------------------------------------------------
11983070  person         None        Johnny Cash                          singer
203407    person         None        Celine Dion                          singer
2773076   group          None        Guns N' Roses                        band

945778    location       None        Hsinchu Science and Industrial Park
951038    location       None        Linbian, Pingtung                    name of city)

19299838  communication  None        Cape No. 7                           movie
543675    person         None        Jay Chou                             singer

1374293   group          None        National Chung Hsing University
2012972   group          None        Yuan Ze University

412376    animal         butterfly   Queen                                namd of speices
42010     group          band        Queen                                name of band
10309519  communication  magazine    Queen                                name of maagazine
559004    artifcact      automobile  Queen                                car model name
718750    communication  album       Queen                                music album
570546    person         Snow White  Queen                                fictional character
130425    artifcact      TTC         Queen                                subway station
----------------------------------------------------------------------------------------------
```

PE, parenthetic explanations, see <a href='http://en.wikipedia.org/wiki/Wikipedia:Disambiguation'>Wikipedia guideline on resolving ambiguous titles</a>.

Download 
--------------------------------
Plain text and python module:
<a href='http://moon.cse.yzu.edu.tw/WikiSense/release.tbz2'>http://moon.cse.yzu.edu.tw/WikiSense/release.tbz2</a>
