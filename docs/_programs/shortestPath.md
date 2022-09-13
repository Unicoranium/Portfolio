---
layout: program
title: Shortest Path
desc: Demonstrates flaws with shortsighted path finding.
type: html
tags:
    - calculation
    - optimization
    - simple
---

7 nodes are chosen at random locations on the screen (0-6). One of these nodes is selected as the starting point.

To find the shortest path that connects all the nodes, two methods are displayed.

The red line, which is incorrect, moves to the nearest unvisited node. This creates a good path very quickly that is often similar to the best path.

The blue line, which is correct, takes all permutations of paths and calculates the total distance of each to guarantee the best path is found. This is far less efficient since it checks all paths. There are more optimized versions of this kind of algorithm.