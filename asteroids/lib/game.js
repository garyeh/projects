var Asteroid = require ('./asteroid.js');

const Game = function () {
  // const DIM_X;
  // const DIM_Y;
  this.NUM_ASTEROIDS = 1000;
};

Game.prototype.addAsteroids = function () {
  for(var i = 0; i < this.NUM_ASTEROIDS; i++) {
    let a = new Asteroid({ pos: [Math.random() * 1000, Math.random() * 1000]});
    a.draw();
  }
};

let g = new Game();
g.addAsteroids();

module.exports = Game;
