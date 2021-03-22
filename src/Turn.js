class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
    this.isCorrect = null;
    this.correctText = null;
  }

  returnGuess() {
    this.guess;
  }

  returnCard() {
    this.currentCard;
  }

  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      this.isCorrect = true;
    } else {
        this.isCorrect = false
    }
  }

  giveFeedback() {
    if (this.isCorrect) {
      this.correctText = 'correct!';
    } else {
      this.correctText = 'incorrect!';
    }
  }

}

module.exports = Turn;