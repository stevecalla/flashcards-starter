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
    return this.isCorrect;
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      this.correctText = 'correct!';
    } else {
      this.correctText = 'incorrect!';
    }
    console.log(this);
    return this.correctText;
  }

}

module.exports = Turn;