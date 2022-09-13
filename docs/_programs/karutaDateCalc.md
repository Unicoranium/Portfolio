---
layout: program
title: Karuta Date Calculator
desc: Optimizes dates in Karuta.
type: html
tags:
    - optimization
    - karuta
    - helper
---

[Karuta] is a game run through a Discord bot. While I never got much into it, my friends played it quite a bit, so I made a few programs to help them play it. 

[Karuta] is a trading card game. You collect trading cards of various anime characters and decorate the cards to make them look better and have better stats. 

[Karuta] receives constant updates so some of this information may be outdated since I don't play the game.

In [Karuta], there is an option to go on a date with a character who you have at least one card of. There are many possible rewards you can get from dates, but my friends were struggling to solve the dates sometimes, so I took the opportunity to write this program.

A date has many rules to create a complex puzzle, but they can be poorly summarized as follows. You have 5 attributes, the first 4 must not hit 0, while the goal is to reach 0 on the timer. The higher the first 4 stats are when the date ends, the better your score. Each block has a location you can choose to visit. These locations can do anything from refilling some of your stats to rerolling the entire board or ending the date early for a reduced score. 

[Karuta] gives you the date in the form of an image. Example: ![Karuta Date Image]({{ '/src/karutaDateImages/006c6a7a9a490d1c4192b643f66fe144.png' | relative_url }})
I have saved a few other images [here]({{ '/src/karutaDateImages/' | relative_url }}) in case you would like to test them.

By right clicking on a tile on the board, you can manually input the date. Alternatively, if you copy the image to the clipboard, you can then click the paste image (your browser may ask you for permission). The program will then attempt to parse the image into the board. At smaller resolutions this will fail for some of tiles due to off screen rendering. This can be manually fixed by right clicking the incorrect tiles, or resizing the window to be larger.

The checkboxes allow for you to customize how you want the date to go. Some locations have special effects that may or may not be desired. Most of these have an intermediate state on the switch to allow it if possible, but don't require it. These can also be change to require it or to avoid it.

Pressing "Calculate" will make it start calculating the optimal route. The switches above can be changed after the calculate starts in case it is unable to find a valid path for what you initially set. As it calculates, it draws the best path it's found so far. 

`NOTE: Due to scaling issues, this program works better if you open it in a new fullscreen tab.`


[Karuta]: https://karuta.com/