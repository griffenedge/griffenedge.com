---
layout: project.liquid
title: Prioritab
tagline: Productivity-focusing browser extension
theme: prioritab
eleventyComputed:
  logo:
    src: "{{ page.filePathStem }}-cover.svg"
tags: other-work
date: 2017-05-06
---

Redesigned a new tab page extension that emphasizes setting priorities through the use of cards for "Today", "This Week" and "This Month". Also contains a countdown for the day, month and year.

<img class="screenshot" src="/assets/images/prioritab/prioritab-screenshot.png" alt="Prioritab Main Screen"/>

## Process

I started using Prioritab to get my studying more in order. As I did I started to notice a few things which I thought could be done better. Luckily Prioritab was maintained on GitHub, so I forked the project and got to work starting with adding responsive icons from Font Awesome and changing the font stack to match that of Currently, Prioritab's original design inspiration. I also added a couple of animations to make load-in a little more enjoyable.

After that I made a new logo for Prioritab, based on the old one but slightly updated to use the "Font Awesome" fa-star and more closely follow Google Chrome's default tab colour scheme. I also brought Prioritab's libraries up to date. I spent a couple of months working on a responsive redesign so that Prioritab would work on all size screens. I implemented flex-box, changed the default colours, changed everything to use relative sizing and changed the font stack to system-ui.
