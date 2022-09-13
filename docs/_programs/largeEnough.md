---
layout: program
title: Large Enough
desc: A program I made to demonstrate the large enough condition
type: html
tags:
    - school
    - math
    - simulation
    - simple
---

In high school statistics, we learned about the large enough condition, but my friend wasn't sure why it was important, so I made this program to help teach them. 

At load, it iterates through larger sample sizes to get its data. This data is randomly generated numbers between 0 and 200 based on the browsers built in random function.

After it loads, you can use the slider at the top to show a specific layer of the graph.

A little confusingly, its samples of samples, so here's an example. Let's say you want to find the average number between 0 and 200 by way of random samples. 

If you set the sample size slider to 1, then it will show you a graph that is made from 5000 samples of size 1. Because the sample size is low, the distribution is very uniform. This means any given sample is as likely happen as any other, but not all of these are close to the average. 

If you instead set it to 200, then it will show 5000 samples of size 200. Because the size is high, the distribution is very clustered around the actual value. The higher sample size means each individual sample is more likely to be accurate.