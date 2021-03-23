const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should take in the deck which is an Array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect([deck]).to.be.an.instanceof(Array);
    expect([deck.cards]).to.be.an.instanceof(Array);
  });


  it('should not take in an instance of Round if undefined', function() { //sad path if Round is empty
    const round = new Round();
    expect(round).to.deep.equal({});
  });

  it('should have currentCard be the first card in the deck at the start of the Round', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.currentCard).to.be.an('object');
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });


  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.returnCurrentCard();

    expect(round.currentCard).to.be.an('object');
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });  

  it('should havea a takeTurn method store the current guess', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    const guess = 'pug';

    round.takeTurn(guess);

    expect(round.currentGuess).to.equal('pug');
  });

  // it('should have a method called takeTurn to create a new Turn instance', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  //   const deck = new Deck([card1, card2, card3]);

  //   const round = new Round(deck);

  //   const guess = 'pug';

  //   expect(round.takeTurn(guess)).to.be.an.instanceof(Turn);
  //   //how to evaluate?
  // });

  it('should have a method called takeTurn to update turnCount property', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('pug');

    // expect(round.turnCount).to.equal(1);
    expect(round.turns).to.equal(1);

    round.takeTurn('capybara');

    // expect(round.turnCount).to.equal(2);
    expect(round.turns).to.equal(2);
  });

  it('should have a property incorrectGuesses which is an empty array', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.be.an('array');
    expect(round.incorrectGuesses).to.be.empty;
  });

  it('should store incorrect guesses (via the id) in an array of incorrectGuesses', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('pug');

    expect(round.incorrectGuesses.length).to.equal(1);
  });

  it('should adjust the current card to the next card in the deck', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    round.takeTurn('pug');

    expect(round.currentCard.id).to.equal(14);

  });

  it('should return whether the guess is incorrect or correct', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    expect(round.takeTurn('pug')).to.equal('incorrect!');

  });

}); 

// Round

//PROPERTIES/PARAMETERS
//Round class takes in responses (takes in responses)
//Round class records those guesses/responses (records these guesses)
//Round class records if guesses are correct or incorrect

//currentCard (which exists in the Turn class should be the first card in the deck at the start of the Round)

// METHODS
// #1) returnCurrentCard: method that returns the current card being played

// #2) takeTurn: method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses

      // xx// When a guess is made, a new Turn instance is created.
      // xx// The turns count is updated, regardless of whether the guess is correct or incorrect
      // xx//Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
      // xx//The next card becomes current card
      // xx// Feedback is returned regarding whether the guess is incorrect or correct

// #3) calculatePercentCorrect: method that calculates and returns the percentage of correct guesses

// #4) endRound: method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’


// For Example
// const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
// const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

// const deck = new Deck([card1, card2, card3]);

// const round = new Round(deck);

// round.deck;   // => [card1, card2, card3];

// round.returnCurrentCard(); // => { id: 1,
//                            //      question: 'What is Robbie\'s favorite animal',
//                            //      answers: ['sea otter', 'pug', 'capybara'],
//                            //      correctAnswer: 'sea otter'
//                            //    }

// round.turns; // => 0

// round.incorrectGuesses;     // => []

// round.takeTurn('sea otter'); // => 'correct!'

// round.takeTurn('spleen');   // => 'incorrect!'

// round.turns; // => 2

// round.incorrectGuesses;     // => [14]

// round.returnCurrentCard();    // => { id: 12,
//             	              //      question: 'What is Travis\'s favorite stress reliever?',
//             	              //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
//             	              //      correctAnswer: 'playing with bubble wrap'
//             	              //    }

// round.calculatePercentCorrect(); // => 50