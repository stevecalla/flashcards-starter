const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1, card2, card3, deck, round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should take in the deck which is an Array', function() {
    expect([deck]).to.be.an.instanceof(Array);
    expect([deck.cards]).to.be.an.instanceof(Array);
  });

  it('should not take in an instance of Round if undefined', function() {
    const round = new Round();
    expect(round).to.deep.equal({});
  });

  it('should have currentCard be the first card in the deck at the start of the Round', function() {
    expect(round.currentCard).to.be.an('object');
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });

  it('should return the current card being played', function() {
    round.returnCurrentCard();

    expect(round.currentCard).to.be.an('object');
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });  

  it('should have a method called takeTurn to update turnCount property', function() {
    round.takeTurn('pug');

    expect(round.turns).to.equal(1);

    round.takeTurn('capybara');

    expect(round.turns).to.equal(2);
  });

  it('should have a property incorrectGuesses which is an empty array', function() {
    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses).to.be.empty;
  });

  it('should store incorrect guesses (via the id) in an array of incorrectGuesses', function() {
    round.takeTurn('pug');

    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should adjust the current card to the next card in the deck', function() {
    round.takeTurn('pug');

    expect(round.currentCard.id).to.equal(14);

  });

  it('should return whether the guess is incorrect', function() {
    expect(round.takeTurn('pug')).to.equal('incorrect! 🔴');

  });

  it('should return whether the guess is correct', function() {
    expect(round.takeTurn('sea otter')).to.equal('correct! 🔵');

  });

  it('should calculate and return 100 percent correct', function() {
    round.takeTurn('sea otter');

    expect(round.percentCorrect).to.equal(100);

  });

  it('should calculate and return 0 percent correct', function() {
    round.takeTurn('pug');

    expect(round.percentCorrect).to.equal(0);

  }); 

  it('should calculate and return 67 percent correct', function() {
    round.takeTurn('pug');
    round.takeTurn('gallbladder');
    round.takeTurn('playing with bubble wrap')

    expect(round.percentCorrect).to.equal(67);
  }); 
  
}); 