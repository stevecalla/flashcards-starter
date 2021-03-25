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
    return this.guess === this.currentCard.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct! 🔵' : 'incorrect! 🔴';
  }

}

module.exports = Turn;