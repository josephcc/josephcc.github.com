---
layout: post
title: "Revolt"
subtitle: "Collaborative Crowdsourcing for Labeling Machine Learning Datasets"
seotitle: "Revolt: Collaborative Crowdsourcing for Labeling MachineLearning Datasets (2017)"
date: 2017-05-06 08:00
comments: true
toc: true
lsi: true
categories: ['CHI', 'SIGCHI', 'HCI', 'Crowdsourcing', 'Sensemaking', 'Machine Learning', 'Classification', 'Labeling']
span: 6
project: true
---

<img src="/images/projects/revolt.png" style='width: 100%;'/>


Joseph Chee Chang, Saleema Amershi, Ece Kamar. ***CHI 2017.***
<br/><span style='color: gray'>work done during internship at Microsoft Research, Redmond.</span>
<br/><span style='color: gray'>rate=25%, N=2,424</span>

Generating comprehensive labeling guidelines for crowdworkers can be
challenging for complex datasets.  Revolt harnesses *crowd disagreements*
to identify ambiguous concepts in the data and coordinates the crowd to
*collaboratively* create rich structures for requesters to make post-hoc
decisions, removing the need for comprehensive guidelines and
enabling dynamic label boundaries.


<!--more-->

Abstract
----------------------

Crowdsourcing provides a scalable and efficient way to construct labeled
datasets for training machine learning systems. However, creating comprehensive
label guidelines for crowdworkers is often prohibitive even for seemingly
simple concepts. Incomplete or ambiguous label guidelines can then result in
differing interpretations of concepts and inconsistent labels. Existing
approaches for improving label quality, such as worker screening or detection
of poor work, are ineffective for this problem and can lead to rejection of
honest work and a missed opportunity to capture rich interpretations about
data. We introduce Revolt, a collaborative approach that brings ideas from
expert annotation workflows to crowd-based labeling. Revolt eliminates the
burden of creating detailed label guidelines by harnessing crowd disagreements
to identify ambiguous concepts and create rich structures (groups of
semantically related items) for post-hoc label decisions. Experiments comparing
Revolt to traditional crowdsourced labeling show that Revolt produces high
quality labels without requiring label guidelines in turn for an increase in
monetary cost. This up front cost, however, is mitigated by Revolt's ability to
produce reusable structures that can accommodate a variety of label boundaries
without requiring new data to be collected. Further comparisons of Revolt's
collaborative and non-collaborative variants show that collaboration reaches
higher label accuracy with lower monetary cost.

Downloads
----------------------
<a class="btn btn-default" href="/images/papers/revolt-crowd-labeling.pdf" target='_blank' onclick="_gaq.push(['_trackEvent', 'Paper', 'Revolt', 'PDF']);" role="button">PDF Download</a>
<a class="btn btn-default" href="#" target='_blank' onclick="_gaq.push(['_trackEvent', 'Paper', 'Revolt', 'ACM']);" role="button">(to appear) ACM Digital Library</a>

Citation
----------------------
```
Joseph Chee Chang, Saleema Amershi, and Ece Kamar. 2017.
Revolt: Collaborative Crowdsourcing for Labeling Machine Learning Datasets.
In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems (CHI '17).
ACM, New York, NY, USA, 3180-3191. DOI: http://dx.doi.org/10.1145/3025453.3026044
```

Bibtex
----------------------
```
@inproceedings{Chang:2017:Revolt,
 author = {Chang, Joseph Chee and Amershi, Saleema and Kamar, Ece},
 title = {Revolt: Collaborative Crowdsourcing for Labeling Machine Learning Datasets},
 booktitle = {Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems},
 series = {CHI '17},
 year = {2017},
 url = {http://doi.acm.org/10.1145/3025453.3026044},
 doi = {10.1145/3025453.3026044},
 publisher = {ACM},
 address = {New York, NY, USA},
} 
```

