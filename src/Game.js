const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

  // I just came up with a solution using a trigger (think on/off switch) to prevent 
  // game.start() from running during the test invocation vs during the real invocation. 
  // Don’t want to give too much away but hopefully this will get you going somewhere

class Game {
  constructor() {
    this.currentRound;
  }

  startGame() {
    const createCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(createCards);
    this.currentRound = new Round(deck);

    this.printMessage(deck);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
      console.log(`
***********************************************************************************
                          🟡 WELCOME TO FLASHCARDS! 🟡

            You will be presented ${deck.countCards()} questions. Make your best guess.
   Press the numer of your choice or press <return> for the default first choice.
    Your score (number of correct guesses) will be reported after the last card.
-----------------------------------------------------------------------------------
`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;