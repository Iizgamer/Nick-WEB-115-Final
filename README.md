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
- Bracket updates in real time as winners are chosen — completed matches are visually locked and greyed out.
- A champion screen appears when the final match is decided.
- All tournament state is saved to `localStorage` — progress survives a page refresh.
- Users can reset a tournament to start over or delete it entirely.

---

## Core Requirements Coverage

| Requirement | Implementation |
|---|---|
| **If Statements & Loops** | Generating the bracket requires looping over contestants to pair them into first-round matches. If statements determine whether a round is complete (all winners chosen) before unlocking the next round, and check edge cases like odd contestant counts or a bye slot. |
| **Event Listeners** | Click listeners on each match card select the winner and trigger a re-render. A submit listener on the setup form kicks off bracket generation. A reset button clears state after a confirmation check. |
| **DOM Element Creation** | The entire bracket (every round column, match card, contestant name label, and winner indicator) is built dynamically with `createElement` and `appendChild`. Nothing is hardcoded in the HTML beyond the app shell. |
| **Classes & Subclasses** | A base `Tournament` class holds the contestant list, bracket state, and methods like `generateBracket()` and `recordWinner()`. `SingleEliminationTournament` extends `Tournament` and implements the specific bracket-advancement logic. A `Match` class represents each individual pairing with properties for both contestants and the winner. |

---

## DLC — Additional Topics

### JSON & Local Storage
The full tournament object — contestant names, match results, current round — is serialized with `JSON.stringify()` and saved to `localStorage` after every state change. On load, `JSON.parse()` restores the bracket exactly where the user left off. This means no data is lost between sessions without any backend.

### Fetch & Public APIs
When a user starts a tournament in "Music Mode," the app fetches the top tracks for a given artist from the MusicBrainz API and pre-fills the contestant list automatically, so users can immediately bracket an artist's discography without typing anything in.

### HTML Canvas
The bracket is rendered visually on an HTML `<canvas>` element. Contestants are drawn as labeled boxes, connecting lines show the bracket structure, and completed matches are styled differently from pending ones. Canvas re-renders after every winner selection to reflect the updated state.

---

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- MusicBrainz API *(free, no API key required)*
- `localStorage` for tournament persistence
- HTML Canvas for bracket rendering
- VS Code + GitHub
The Idea:
A text-based survival/RPG game. I would use the functions of JavaScript, CSS, and HTML in order to immerse the user using text elements, background elements, and audio effects. On top of that, I would use local storage as a way of saving, so that the user would not lose their progress in the game. The game would span over an overarching story with events happening every so often that will serve as obstacles. In this game, the user will attempt to explore the island they are stranded on after a ship wreck. In the exploration of this island, they will have to solve puzzles, craft items to help them survive, and fend off enemies in turn-based, strategy-first battles. Eventually, the user will discover the hidden lore of the island, and will be capable of leaving the island, effectively ending the game. If the user dies before then, the user will reawaken in the last area the game saved, which will be every day at the beginning of that day.

Saving System:
My idea for the saving system is that I will store all necessary information in a dictionary (or the JavaScript equivalent), which will be saved into the local storage. Whenever the game loads back up, the information will be loaded, and the user will be autmoatically set into the area of the game they are currently in, all statistics recorded properly.

RPG Element:
For the RPG battling system, I plan on every battle in the game to feel different in some way. I want no battle to feel plain, and that every fight should require at least a little strategy to be successful. I would also like to add a way to dodge or reduce the damage you take from attacks that would require skill rather than just having to tank any hits you do receive at full damage. I also plan on adding items which will be used in various potential ways. For example, some will be better for dealing better damage, some will have higher critical hit rates, some may allow for the dodging/defending to become easier, et cetera.

Potential Struggles:
Some immediate struggles I could see before coding is the struggle of ensuring that the save system works properly, saving every necessary detail. Also, I can see the potential problem of the user having to click through the intro every time they wish to enter the game. I can also see the issue of the player wanting to replay the game. Finally, I can predict that there will potentially be an issue of the user being able to softlock themselves. However, this should be very difficult to happen due to how lax I will be with the game.
