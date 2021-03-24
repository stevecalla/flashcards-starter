const Turn = require("./Turn");

class Round {
  constructor(deck) {
    if (deck) {
      this.deck = deck;
      // console.log(this.deck);
      this.currentCard = this.deck.cards[0];
      this.currentGuess = null;
      this.turns = 0;
      this.incorrectGuesses = [];
      this.correctGuesses = 0;
      this.percentCorrect = 0;
      // console.log('d', this);
      // console.log(this.deck.cards[0])
    }
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    // console.log(this)
    this.currentGuess = guess;
    const currentTurn = new Turn(guess, this.currentCard);
    this.updateTurnCount();
    if (currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    } else {
      this.correctGuesses++;
    }
    // console.log(this)
    this.updateCurrentCard();
    return currentTurn.giveFeedback();
  }

  updateTurnCount() {
    this.turns++;
    return this.turns;
  }

  updateCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  }

  calculatPercentCorrect() {
    this.percentCorrect = Math.ceil((this.correctGuesses / this.turns) * 100);
    return this.percentCorrect;
  }

  endRound() {
    this.percentCorrect = this.calculatPercentCorrect();
    const endRoundMessage = `** Round over! ** You answered ${this.percentCorrect}% of the questions correctly!`;
    console.log(endRoundMessage);
    return endRoundMessage;
  }

}

module.exports = Round;