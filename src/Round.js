const Turn = require("./Turn");

class Round {
  constructor(deck) {
    if (deck) {
      this.deck = deck;
      this.currentCard = this.deck.cards[0];
      this.turns = 0;
      this.incorrectGuesses = [];
      this.correctGuesses = 0;
      this.percentCorrect = 0;
    }
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard);
    this.updateTurnCount();
    this.storeGuessResult(currentTurn);
    this.updateCurrentCard();
    this.calculatPercentCorrect();
    return currentTurn.giveFeedback();
  }

  updateTurnCount() {
    this.turns++;
  }

  storeGuessResult(currentTurn) {
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    } else {
      this.correctGuesses++;
    }
  }

  updateCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  }

  calculatPercentCorrect() {
    this.percentCorrect = Math.ceil((this.correctGuesses / this.turns) * 100);
  }

  endRound() {
    const endRoundMessage = `
***********************************************************************************    
                              🟡  ROUND OVER! 🟡
    
         You answered ${this.percentCorrect}% (or ${this.correctGuesses} out of ${this.turns}) of the questions correctly!
       Carefully review the correct answers as necessary. And play again!!
              To play again type in node index.js. Good luck!

-----------------------------------------------------------------------------------
`;
    console.log(endRoundMessage);
  }

}

module.exports = Round;