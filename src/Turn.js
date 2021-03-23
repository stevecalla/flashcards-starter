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

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }

}

module.exports = Turn;