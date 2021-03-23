const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');
const util = require('./util');
const data = require('./data');

const prototypeQuestions = data.prototypeData;

class Game {
  constructor() {
    this.currentRound;
    // console.log(this.currentRound);
    // console.log(this);
    this.createCards = [];
  }

  startGame() {
    for(let i = 0; i < prototypeQuestions.length; i++) {
      this.createCards.push(new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer));
    }
    // console.log(this.createCards);
    const deck = new Deck(this.createCards);
    // console.log(deck);
    // const newRound = new Round(deck);
    this.currentRound = new Round(deck);
    // console.log(this.currentRound);

    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;