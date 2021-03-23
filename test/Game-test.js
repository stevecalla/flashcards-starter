const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const currentGame = new Game();
    expect(currentGame).to.be.an.instanceof(Game);
  }); 

  // it('should keep track of the currentRound', function() {
  //   const currentGame = new Game();
  //   expect(currentGame.currentRound).to.exist;
  //   //how do i test this....?
  // });

  it('should create cards', function () {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const game = new Game();

    game.startGame(card);

    expect(game.createCards).to.be.an('object');
    expect(game.createCards).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: [ 'sea otter', 'pug', 'capybara' ],
      correctAnswer: 'sea otter'
    });
  });

}); 

// Your Game class should meet these other requirements:
// #1) Should keep track of the currentRound

// start: method that starts everything
// a) Creates Cards
// b) Puts Cards in a Deck
// c) Creates a new Round using the Deck
// d) invokes printMessage to display the message in the CLI
// e) invokes printQuestion to kick off our helper functions that allow interaction via the CLI
// Note: The helper functions are all fleshed out and fit to work with classes/methods that meet the requirements in the past iterations.

