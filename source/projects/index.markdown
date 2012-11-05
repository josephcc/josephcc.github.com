---
layout: page
title: "Selected Projects"
date: 2012-10-24 13:24
comments: false
sharing: false
footer: true
toc: true
---

Open source projects
--------------------

### 0xBench (Android/GAE)

{% img https://lh5.ggpht.com/yi5mTvtvoQl0U4Zg-lj2D6SN7h3ZZ1ypdzJzjtga1fQR86i6i7nnfld9flreZBjhSho %}
{% img https://lh4.ggpht.com/FZKTxBk7Mfrw5yYIT38jPNj6d97YABvOt0F7Qk7lK7tnq3yZ1zGZ9sSOrvGa2yMDumk %}

_0xBench_ is an open source Android app and website I developed using Java and C for _0xlab Inc._ during
my four-month part-time internship. It is designed to be an open platform for benchmarking Android on a
system level. _0xBench_ is now beening used by major companies worldwide, and it even ships with _Taxus
Instrument_'s devboards.

You can find binary, source code, and documentation in following links: 

- [Documentation on Google Code wiki](http://code.google.com/p/0xbench/w/list)
- [Project page on Gitorius](http://gitorious.org/0xbench/0xbench)
- [Project page on Google Code](http://code.google.com/p/0xbench/)
- [0xBenchWeb on Google App Engine](http://0xbenchmark.appspot.com/)
- [Comparison between HTC Hero, HTC Desire, Google Nexus One](http://0xbenchmark.appspot.com/run/bizkit.tw@gmail.com/Demo)
- [Video of me announcing code release]](http://www.youtube.com/watch?v=8JwFaNBrBaM) at [COSCUP](http://octopress.org), the largest open source conference in Asia (in Chinese)


### KerKerInput (Android IME)
One of the first Chinese input methods implemented for the Android platform. My main contribution is
improving precision on choice-of-character on phonics-based input methods and implementing
next-word-prediction using probability distribution and language model.

- [Project Page on Github](https://github.com/bizkit/KerKerInput)

Smart Phone Apps
--------------

### Augmented Reality Piano (Android)

<iframe width="853" height="480" src="http://www.youtube.com/embed/kfnd2wnb1Ec?rel=0" frameborder="0"
allowfullscreen></iframe>

An Android app that allows user to play a printed piano on a piece of paper. Sound effects and software
mixer are written in C using Android NDK.

### Taipei Fever (Android/iOS/WP7/Website)
<iframe width="640" height="480" src="http://www.youtube.com/embed/_S22zTYNOKk?rel=0" frameborder="0"
allowfullscreen></iframe>

A comprehensive Taipei City tour guide app with a stunning UI. It was later awarded by the Taipei City
Government. 

- [Promotion Website](http://taipei.zfever.tw/)

### Draw Something Sidekick (NLP/iOS)

<iframe width="640" height="480" src="http://www.youtube.com/embed/g3_TMp7IJB0?rel=0" frameborder="0"
allowfullscreen></iframe>

_Sidekick_ is a iPhone app that solves the popular game _Draw Something_. It scans screen shots taken
in-game, automatically recognizes the letters, and generate a list of possible answers ranked by
probability. The corpus is trained on dictionaries, Wikipedia titles, and the Wikipedia redirection
database to yield high precision and coverage.

### RePhrase (NLP/iOS)

{% img http://a29.phobos.apple.com/us/r1000/069/Purple/v4/af/3c/39/af3c39bd-6c2f-8af3-f480-cc7e36d296ec/mzl.ubqvgiku.320x480-75.jpg 300 450 %}
{% img http://a772.phobos.apple.com/us/r1000/115/Purple/v4/1e/84/8f/1e848fc8-9eb5-84f7-35ce-2dbad12c1ca4/mzl.tbycdtpq.320x480-75.jpg 300 450 %}

an App designed to help writers find alternative expressions for a given phrase. It works like a
thesaurus that is aware of the surrounding context, and is capable of querying multiple words. 

- [On AppStore](https://itunes.apple.com/en/app/rephrase/id558833442?mt=8)

School Projects
---------------
Projects I wrote for school courses or publications.

### Head-Tracking for Virtual Reality (OpenCV)

I made a infrared filter out of different cellophanes for my webcam, and mounted two infrared
LEDs on a hat. Using OpenCV to track the position and distance between the two LEDs, the user's 3D
location can be calculated to simulate virtual reality (first video) or gaming (second video).

<iframe width="640" height="480" src="http://www.youtube.com/embed/YURdunvmSHA?rel=0" frameborder="0"
allowfullscreen></iframe>

<iframe width="640" height="480" src="http://www.youtube.com/embed/i9fHj52ZnBw?rel=0" frameborder="0"
allowfullscreen></iframe>

### Location-Based Photo Enhancer (Matlab)

<iframe width="853" height="480" src="http://www.youtube.com/embed/LUIUlL-4pBc?rel=0" frameborder="0"
allowfullscreen></iframe>

1. User takes photo on smartphone and uploads to server.
2. GPS location is used to find near by high-quality photos on Flickr.
3. Calculate SURF-features to match the most similar photo as target image.
4. Apply enhancement algorithm on user's photo base on the target image. 

