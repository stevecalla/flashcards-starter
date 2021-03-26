## FlashCards

A [Front-End Project] by: [Steve Calla](https://github.com/stevecalla)

## Index

1. [Overview](#overview)
2. [Wave Score](#accessibility)
3. [Functionality](#functionality)
4. [Technologies](#technologies)
5. [Contributors](#contributors)
6. [Resources](#resources)

## Overview

Flashcards is a game that tests a users understanding of basic coding concepts. The test is run throought the command line! 😱 A user will be preented with 30 questions, take guesses, and see a final score at the end of the round.

## Game Preview - In Terminal

<img src="https://media.giphy.com/media/BzKzCMv3QCAbU0X4DP/giphy.gif" width="100%" height="500"/>

## Testing Preview - 100% Passing

<img width="1129" alt="FINAL TESTING SCREENSHOT" src="https://user-images.githubusercontent.com/72281855/112554938-dbf2ea80-8d8c-11eb-88d9-efa2b8c75474.png">

## Functionality

* Learning Objectives:
  * Contribute code to an partially constructed object-oriented application
  * Follow spec/prompts to make a working application
  * Implement ES6 classes
  * Write modular, reusable code that follows SRP (Single Responsibility Principle)
  * Implement a robust testing suite using TDD

* Project Upgrades:
    * Enhanced the start and end game layout and description.
    * Added "process.exit(0)" to line 40 of util.js to programatically return the user to the prompt at the end of the game.
    * Added a blue circle 🔵 emoji for correct answers and red circle 🔴 emoji for incorrect answers.
    * Removed unnecessary server related code in the index.js file.
    * Added a variable and condition for the last test in the Game-test file to prevent the game from running during "npm test". Likely would not do this in the real world given other options but wanted to experiement with this and ensure a test was checking that game.currentRound is an instanceof Round to be sure the startGame() was working properly.

* Possible Enhancements:
    * More practice: Add functionality so that a score of less than 90% will require the user to go through the entire dataset again.
    * Review incorrect answers: Add functionality so that the Round (and thus, the Game) does not end after you’ve gone through all of the cards. The player should then be prompted to try to guess again, reviewing only those cards that are stored as incorrect.
    * Timer: At the end of the game, report how much time it took to complete the game (in minutes and seconds).
    * Report Card: At the end of the game, create a report card that would detail any answers that the user got wrong as well as how many tries each question took.
    * Options for mixed datasets: At the beginning of the game, give options for choosing to study different subjects (have a dataset for one subject and another subject), as well as the option for mixing all of the subjects together.

* Known Issues/Bugs:
    * None at this time.

## Technologies

1. JavaScript
2. GitHub
3. ESLint
4. NPM Package - inquirer.prompt

## Install/Setup instructions

1. Get The Repo: Go to https://github.com/stevecalla/flashcards-starter.
2. Fork & Clone: Fork the repo to your GitHub, then clone it to your local machine.
2. Install NPM: Once you have cloned the repo, change into the directory and install the library dependencies. Run: "npm install" to do so at the terminal prompt.
3. Play The Game: Enter "node index.js" at the terminal commmand prompt. Ensure you are in the root directory of the Flashcard folder/directory. A message with instructions will display

## Contributor(s)

* Creators: [Steve Calla](https://github.com/stevecalla)

## Resources
* Project Description: https://frontend.turing.io/projects/flash-cards.html
* GitHub Repo - Steve Calla: https://github.com/stevecalla/flashcards-starter
* GitHub Repo - Original Turing: https://github.com/turingschool-examples/flashcards-starter
* Project Board: https://github.com/stevecalla/flashcards-starter/projects/1
* GitHub Hosted URL: not applicable.

