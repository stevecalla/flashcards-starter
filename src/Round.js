const Turn = require("./Turn");

class Round {
  constructor(deck) {
    if(deck) {
      this.deck = deck;
      this.currentCard = this.deck.cards[0];
      this.currentGuess = null;
      this.turnCount = 0;
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
    return currentTurn.giveFeedback();
  }

  updateTurnCount() {
    return this.turnCount++;
  }

}

module.exports = Round;