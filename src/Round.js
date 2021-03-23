const Turn = require("./Turn");

class Round {
  constructor(deck) {
    if(deck) {
      this.deck = deck;
      this.currentCard = this.deck.cards[0];
      this.currentGuess = null;
      this.turnCount = 0;
      this.turns = 0;
      this.incorrectGuesses = [];
      // console.log('d', this);
      // console.log(this.deck.cards[0])
    }
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.currentGuess = guess;
    const currentTurn = new Turn(guess, this.currentCard);
    this.updateTurnCount();
    if(currentTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    // console.log(this)
    this.updateCurrentCard();
    return currentTurn.giveFeedback();
  }

  updateTurnCount() {
    this.turns++;
    return this.turns;
    // return this.turnCount++;
  }

  updateCurrentCard() {
    console.log(this.deck.cards[this.turns]);
    return this.currentCard = this.deck.cards[this.turns];
  }

}

module.exports = Round;