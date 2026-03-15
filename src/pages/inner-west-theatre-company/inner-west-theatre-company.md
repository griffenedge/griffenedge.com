---
layout: project.liquid
title: Inner West Theatre Company
tagline: Community theatre volunteering
theme: canterbury-theatre-guild
eleventyComputed:
  logo:
    src: "{{ page.filePathStem }}-cover.svg"
tags: other-work
date: 2017-07-22
---

[Inner West Theatre Company](https://www.innerwesttheatre.com.au/) (formerly Canterbury Theatre Guild) is a not-for-profit community based musical theatre group where members of the community are welcome to join and participate in putting on a musical, concert and/or cabaret once or twice a year.

I have been on the committee at Inner West Theatre Company since 2015 and have been responsible for promoting our events to the community. I designed a wide range of promotional material for the company, ranging from tickets to programs, digital advertising, videos and the website.

<img class="screenshot" src="./inner-west-theatre-company-homepage.png" alt="Inner West Theatre Company Homepage"/>

<img class="screenshot" src="./inner-west-theatre-company-about-page.png" alt="Inner West Theatre Company About Page"/>

<img class="screenshot" src="./inner-west-theatre-company-productions-page.png" alt="Inner West Theatre Company Productions Page"/>

## Projects

<ul class="projects">
  {%- for project in collections["canterbury-theatre-guild-project"] | reverse -%}
    {% include "project-card.liquid" %}
  {%- endfor -%}
</ul>
