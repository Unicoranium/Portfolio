---
layout: program
title: OpenComputers Mob Grinder
desc: Automatic mob grinders in Minecraft by using the OpenComputers mod.
type: lua
tags:
    - helper
    - openComputers
---

While playing modded Minecraft, I decided to use the OpenComputers mod to create and manage a mob grinder.

Rather than use levers to disable the spawners, I created a computer from the OpenComputers mod and programmed it to create a GUI for me to interact with in the game.

The program allows me to create groups of redstone outputs connected to the computer. This can be applied to many use cases, but for this one I have 3 groups. 

There are spawners to select which mobs to spawn, grinders to select how to kill the mobs, and fans to control where the mobs go.

This program uses 3 lua files in total.

[The first file]({{ '/src/mobGrinder.lua' | relative_url }}) defines the majority of the logic. This is the file that is actually run on the computer. The beginning of the file handles the configuration of the redstone I/O components.

[The second file]({{ '/src/buttonAPI.lua' | relative_url }}) defines the API for tracking and rendering the buttons on the in game display. This file just needs to be present on the computer to be imported by the first file.

[The third file]({{ '/src/printComponents.lua' | relative_url }}) is a simple program to print out the UUID of all connected redstone components. This is used to help configure the first file.

A simple video demo of it turning lamps on and off.

<!-- <img src="/src/ocMobGrinder.gif" style="max-width:100%"/> -->

<video muted autoplay loop style="max-width:100%">
    <!-- <source src="http://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4" type="video/mp4"/> -->
    <source src="{{ '/src/ocMobGrinder.mp4' | relative_url }}" type="video/mp4"/>
</video>