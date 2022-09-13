---
layout: program
title: CSGO Strat Roulette
desc: Gives random strategies for CSGO.
type: html
tags:
    - simple
    - helper
---

A fun activity to do in CSGO with friends is Strat Roulette, but the website we were using hadn't been updated in a long time, so I made my own version.

It gives a random strategy from a list for the team to try to complete for the round.

The strategies are listed [here]({{ '/src/csgoStrats.js' | relative_url }}).

By selecting your side, the objective, or the map, it will filter the list of strats to only ones that work there.

Some strategies are simply defined as a constant string, while some have further complexities.

For example, this strategy randomly selects a player to be the president. Each time it gets selected as our strategy, the chosen player will also be reselected.
```js
{
    name: 'MR. PRESIDENT',
    desc: "%% is the president, they must get rid of all their weapons. The rest of the team has to protect them at all costs while yelling secret service quotes ('GET DOWN MR.PRESIDENT', 'BREACH BREACH BREACH', etc.).",
    params: [{ type: 'select', list: [{ type: 'tag', tag: 'player' }] }],
}
```
