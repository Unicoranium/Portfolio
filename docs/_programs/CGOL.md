---
layout: program
title: Conway's Game Of Life
desc: A program I made to simulate Conway's Game of Life
type: html
tags:
    - game
    - simulation
    - khan academy
---

In eight grade, my dad showed me [Conway's Game of Life] and challenged me to make it myself. I ended up creating two versions. First, I made it on Khan Academy [here](https://www.khanacademy.org/computer-programming/conways-game-of-life/6238050674933760). Later, I remade it in pure JS and HTML.

The rules are simple. As stated on Wikipedia:

1. Any live cell with two or three live neighbours survives.
2. Any dead cell with three live neighbours becomes a live cell.
3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.

My program has several possible inputs. The first two input boxes are for width and height, respectively. The next input is for potential frame rate. If the grid is too big, it won't be able to reach high frame rates.

The pause/play button with pause/play the simulation. While the simulation is paused, you can click any cell on the board to invert it. The randomize button randomizes every cell in the board to be about 50% alive and 50% dead. The clear button sets all cells to dead. The invert button swaps the state of all cells.



[conway's game of life]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
