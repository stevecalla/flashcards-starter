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

  //breakup this method?
  //howt test that currentTurn is instance of turn w/out a property?

  takeTurn(guess) {
    // console.log(this)
    this.currentGuess = guess;
    
    const currentTurn = new Turn(guess, this.currentCard);

    this.updateTurnCount();

    if (!currentTurn.evaluateGuess()) {
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

  calculatPercentCorrect() { //refacotr to one line?
    this.percentCorrect = Math.ceil((this.correctGuesses / this.turns) * 100);
    return this.percentCorrect;
  }

  endRound() { //can i remove console log? what am i missing?
    this.percentCorrect = this.calculatPercentCorrect();
    const endRoundMessage = `
***********************************************************************************    
                              🟡  ROUND OVER! 🟡
    
         You answered ${this.percentCorrect}% (or ${this.correctGuesses} out of ${this.turns}) of the questions correctly!
       Carefully review the correct answers as necessary. And play again!!
              To play again type in node index.js. Good luck!

-----------------------------------------------------------------------------------
`;
    console.log(endRoundMessage);
    // return endRoundMessage;
  }

}

module.exports = Round;