class Deck {
  constructor(card) {
    this.cards = card;
    // console.log(this);
    // console.log(this.cards.length);
  }

  countCards() {
    // console.log(this);
    // console.log(this.cards.length);
    return this.cards.length;
  }

}

module.exports = Deck;