# Nick-WEB-115-Final

# Text-based Survival-RPG Game
**WEB-115 Final Project Proposal**
Student: Nicholas Foles | Repo: `WEB-115_FinalProject_Foles`

---

## Overview

A text-based survival/RPG game. I would use the functions of JavaScript, CSS, and HTML in order to immerse the user using text elements, background elements, and audio effects. On top of that, I would use local storage as a way of saving, so that the user would not lose their progress in the game. The game would span over an overarching story with events happening every so often that will serve as obstacles. In this game, the user will attempt to explore the island they are stranded on after a ship wreck. In the exploration of this island, they will have to solve puzzles, craft items to help them survive, and fend off enemies in turn-based, strategy-first battles. Eventually, the user will discover the hidden lore of the island, and will be capable of leaving the island, effectively ending the game. If the user dies before then, the user will reawaken in the last area the game saved, which will be every day at the beginning of that day.

The target user are players who want a simple game, but still want to be able to feel the setting of the game.

---

## Features

- RPG, turn-based system when entering a battle.
- localStorage to use as save system.
- Audio for specific events.
- An inventory for the user to be able to keep track of items at hand.
- A day-night cycle dictated by the user's actions.

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | In order to run the turn-based RPG, I am going to have to check if both the user and the enemy have more than zero health left. I will have to use a while loop in the day by day function in order to see if the user is still alive, and therefore is able to continue onto the next day, increasing the day count. |
| **Event Listeners** | I will use click listeners for most every action. For example, actions in battles will have to be done by clicking the action you wish to perform, whether that be attacking or using an item. |
| **DOM Element Creation** | The majority of the page will be made by the DOM due to the fact that I will have to practically reset the page every time I want to change the setting. I will also have to add DOM elements for the battle so that the "Attack" and "Item" button options are available to the user. |
| **Classes & Subclasses** | A base `Enemy` class will exist. Inside of the `Enemy` class will lie multiple variables, including HP and ATK. These will be constant across all enemies. A method that will be used is the takeDMG method, which will decrease the enemy's health when hit. The reasoning for me to not include the user in this class is because the user will have slightly different variables and methods that cannot be settled by this class. |

---

## DLC — Additional Topics

### JSON & Local Storage
The user's data will be saved after each day to the localStorage so that the user will not lose their progress in this game. This will be necessary for my project as I wish to make this a full-length game, or at least as far as I can get it to be, meaning it could take many hours to complete. 

---

## Tech Stack
- HTML, CSS, Vanilla JavaScript
- `localStorage` for save system
- VS Code + GitHub
