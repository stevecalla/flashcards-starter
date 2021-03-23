const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1, card2, card3, deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be initialized with an array of Card objects', function() {
    expect([deck]).to.be.an('array');
  })

  it('should know how many Cards are in the Deck', function() {
    deck.countCards();

    expect(deck.cards).to.have.lengthOf(3);
  })

}); 

// Deck - psuedo code

//PROPERTIES
// - this.cards = [card]

//METHODS

// #1) Your Deck class should be initialized with an array of Card objects 
// i assume this means an array of cards will be submitted to new Deck ([card1, card2...])
// when will this happen... not sure as long as it's able to accept an array of cards
// can i test if this is an array? maybe below as i build out the new Deck?

// #2) It should know how many Cards are in the Deck.
// take the length of this.cards

// FOR EXAMPLE
// const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

// const deck = new Deck([card1, card2, card3]);

// deck.countCards(); // => 3