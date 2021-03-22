const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn'); // ADDED

describe('Turn', function() {
  let card, turn;

  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store the users guess to the question', function() {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal(`pug`);
  }); 

  it('should store a Card object for the current card in play', function() {
    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });
  
  it('should return the current guess', function() {
    turn.returnGuess();
    expect(turn.guess).to.equal('pug');
  });  

  it('should return the current Card', function() {
    turn.returnCard();
    expect(turn.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  }); 

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    turn.evaluateGuess();

    expect(turn.isCorrect).to.deep.equal(false);

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    turn2.evaluateGuess();

    expect(turn2.isCorrect).to.deep.equal(true);
  }); 

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    turn.evaluateGuess();

    expect(turn.isCorrect).to.deep.equal(false);

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    turn2.evaluateGuess();

    expect(turn2.isCorrect).to.deep.equal(true);
  }); 

  it('returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.correctText).to.equal('incorrect!');

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    turn2.evaluateGuess();
    turn2.giveFeedback();

    expect(turn2.correctText).to.equal('correct!');
  }); 

});

// Your Turn class should meet the following requirements:
// - [x] Instantiated with two arguments - 
//      1) a string (that represents a user’s guess to the question)
//      2) a Card object for the current card in play.
// const turn = new Turn('pug', card);

// - [x] returnGuess: method that returns the guess
// - [x] returnCard: method that returns the Card

// - [x] evaluateGuess: method that returns a boolean indicating if the user’s 
// guess matches the correct answer on the card

// - [x] giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ 
// based on whether the guess is correct or not.

// For Example
// const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
// const turn = new Turn('pug', card);

// turn.returnGuess();    // => 'pug'


// turn.returnCard();     // => { id: 1,
//                        //      question: 'What is Robbie\'s favorite animal',
//                        //      answers: ['sea otter', 'pug', 'capybara'],
//                        //      correctAnswer: 'sea otter'
//                        //    }


// turn.evaluateGuess();  // => false


// turn.giveFeedback();   // => incorrect!