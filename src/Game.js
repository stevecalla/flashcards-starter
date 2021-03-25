const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Game {
  constructor() {
    this.currentRound;
  }

  startGame(dontRunInquirePromptDuringTesting) {
    const createCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = new Deck(createCards);
    this.currentRound = new Round(deck);
    
    // console.log(dontRunInquirePromptDuringTesting);
    if (dontRunInquirePromptDuringTesting === undefined) {
      this.printMessage(deck);
      this.printQuestion(this.currentRound);
    }
  }

  printMessage(deck) {
    console.log(`
**************************************************************************************************
                                 🟡 WELCOME TO FLASHCARDS! 🟡

                   You will be presented ${deck.countCards()} questions. Make your best guess.
           Press the numer of your choice or press <return> for the default first choice.
            Your score (number of correct guesses) will be reported after the last card.

--------------------------------------------------------------------------------------------------
`)
  }

  printQuestion(round) {
    util.main(round);
  }
  
}

module.exports = Game;