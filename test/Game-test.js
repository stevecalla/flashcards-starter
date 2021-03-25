const chai = require('chai');
const expect = chai.expect;

// const Deck = require('../src/Deck');
const Game = require('../src/Game');
// const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const currentGame = new Game();
    expect(currentGame).to.be.an.instanceof(Game);
  }); 

  // it('should create an instance of Round', function () {
  //   const game = new Game();

  //   game.startGame();

  //   // expect(game.deck).to.be.an.instanceof(Deck);
  //   // expect(game.currentRound).to.be.an.instanceof(Round);
  // });

});

