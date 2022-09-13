---
layout: program
title: Sierpinski Triangle
desc: Multiple ways to draw a Sierpinski triangle.
type: khanacademy
tags:
    - simple
    - khan academy
    - graphics
---

At some point in high school, I discovered the magic that is the Sierpinski triangle. 

I made three programs to draw the triangle.

[The first program](https://www.khanacademy.org/computer-programming/sierpinski-triangle/6341354153377792) was the default explanation of how to draw it. Draw the large triangle, subdivide, draw 3 smaller Sierpinski triangles.

[The second program](https://www.khanacademy.org/computer-programming/sierpinski-triangle/6584553541271552) drew it line by line. For each unit in the new line, add the two cells above it, if its even, the new cell is the hole, otherwise, its the part of the triangle.

[The third program](https://www.khanacademy.org/computer-programming/random-points/5344294297993216) is the one I found the most interesting. Start with three points as the corners of your Sierpinski triangle. Have a 4th point anywhere else, as you move this point, draw its new location and it will trace out the Sierpinski triangle. Pick one of the three corners at random and move the 4th point half way to it. Draw this point, then repeat. This will result in drawing the Sierpinski triangle.