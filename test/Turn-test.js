const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn'); // ADDED

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store the users guess to the question', function() {
    const turn = new Turn('pug');
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal(`pug`);
  }); 

  it('should store a Card object for the current card in play', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);

    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });
  
  it('should return the current guess', function() {
    const turn = new Turn('pug');
    turn.returnGuess();
    expect(turn.guess).to.equal('pug');
  });  

  it('should return the current Card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    turn.returnCard();
    expect(turn.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  }); 

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.evaluateGuess();

    expect(turn.isCorrect).to.deep.equal(true);

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('pug', card2);

    turn2.evaluateGuess();

    expect(turn2.isCorrect).to.deep.equal(false);
  }); 

  it('should return a boolean indicating if the user’s guess matches the correct answer on the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.evaluateGuess();

    expect(turn.isCorrect).to.deep.equal(true);

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('pug', card2);

    turn2.evaluateGuess();

    expect(turn2.isCorrect).to.deep.equal(false);
  }); 

  it('returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('sea otter', card);

    turn.evaluateGuess();
    turn.giveFeedback();

    expect(turn.correctText).to.equal('correct!');

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('pug', card2);

    turn2.evaluateGuess();
    turn2.giveFeedback();

    expect(turn2.correctText).to.equal('incorrect!');
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

// - [ ] giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ 
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