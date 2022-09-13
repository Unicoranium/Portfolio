---
layout: program
title: Collision Detection
desc: A program I made to detect collisions between 2D shapes
type: khanacademy
tags:
    - khan academy
    - math
    - calculation
    - graphics
---

[This program](https://www.khanacademy.org/computer-programming/shape-collision-detection/5888262362) has shapes falling from the top of the screen to the bottom. If they ever overlap with each other or the red bar across the middle, it draws red dots on each of the intersection points.

It's quite inefficient. It calculates the intercept between all pairs of lines not on the same shape. The only optimization it has is it uses bounding boxes. It won't check collisions with a shape that doesn't have an overlapping bounding box.