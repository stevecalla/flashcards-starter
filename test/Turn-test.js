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

  it('should return a boolean indicating if the guess does not match the correct answer', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  }); 

  it('should return a boolean indicating if the guess does match the correct answer', function() {
    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    expect(turn2.evaluateGuess()).to.deep.equal(true);
  }); 

  it('returns either ‘incorrect!’ based on an incorrect guess', function() {
    expect(turn.giveFeedback()).to.equal('incorrect! 🔴');
  }); 

  it('returns either ‘correct!’ based on a correct guess', function() {
    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    expect(turn2.giveFeedback()).to.equal('correct! 🔵');
  });   

});