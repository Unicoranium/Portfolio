---
layout: program
title: Message Maker
desc: A program I made to write messages out of particles
type: html
tags:
    - simulation
    - graphics
---

One of the few gift programs I still have the files for. Originally, it was made to be like a "Merry Christmas!" gift card, but later, I expanded it to be more generic.

This program draws messages by using a particle system. 

At first load, it will draw and scan the pixel data of letters and a few other common ASCII characters. 

It will then draw any message you give it. If you enter a character it doesn't have the pixel data for, it will draw it to scan it. Any symbol recognized by the arial font should work.

The embedded version does not accept your input, but the fullscreen version does.

It automatically inserts line breaks between words, but if an individual word is too long, it will overflow.

If the message is too long to fit on the screen at once, it will cycle through pages.