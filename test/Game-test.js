const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const currentGame = new Game();
    expect(currentGame).to.be.an.instanceof(Game);
  }); 

  it('should create an instance of Round', function () {
    const game = new Game();

    const dontRunInquirePromptDuringTesting = true;

    game.startGame(dontRunInquirePromptDuringTesting);

    expect(game.currentRound).to.be.an.instanceof(Round);
  });

});

