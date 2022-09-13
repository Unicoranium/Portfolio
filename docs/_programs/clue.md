---
layout: program
title: Clue Solver
desc: A program I made to play a game of Clue and find the answer.
type: html
tags:
    - optimization
    - helper
---

In my early high school years, my family would play board games every now and then. One game was Clue, also called Cluedo in some places. My dad would always win because he had a "secret strategy" that he used, so he challenged me to make a program to beat him.

This is what I made, and by using it, I was finally able to beat him. It can even be used as a spectator who doesnt get to see any of the cards.

When I created this, a good UI wasn't something I really knew how to make, so the starting state was hard coded. It is accessible to the browser console though. Because the embedded files on this site are run in `<iframe>`'s, the page needs to be opened in a new tab using the link above.

Using `knowCard(playerID, cardName)` will add a card to a players hand where `playerID` is the zero-based id of the player and `cardName` is the name of the card as seen in the table.
