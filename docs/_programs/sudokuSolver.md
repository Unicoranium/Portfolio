---
layout: program
title: Sudoku Solver
desc: Solves Sudoku games.
type: html
tags:
    - helper
    - optimization
    - simple
---

Takes the given (hardcoded) sudoku board and solves it.

The board can be edited through the browser console if you open it in a separate tab.

`board[row][col]` is either -1 for unknown, a number if it is known or given, or an array of numbers that may be the answer

It uses the basic strategies, but will not make a random guess if it gets stuck.