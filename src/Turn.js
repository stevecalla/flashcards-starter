class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    this.guess;
  }

  returnCard() {
    this.currentCard;
  }

  evaluateGuess() { //refactor to ternary?
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() { //refactor to ternary?
    if (this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }

}

module.exports = Turn;