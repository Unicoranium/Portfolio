---
layout: program
title: Thue-Morse
desc: Draws Koch's curve from the Thue-Morse sequence.
type: html
tags:
    - calculation
    - math
    - simple
    - graphics
---

Draws Koch's curve by following the [Thue-Morse Sequence](https://en.wikipedia.org/wiki/Thue–Morse_sequence).

The sequence can be derived a few ways, but the way I do it here is just counting the number of 1's in each consecutive binary number.

If the result is odd, move forward, otherwise, rotate by 60 degrees.