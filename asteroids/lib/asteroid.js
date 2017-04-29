var MovingObject = require ('./moving_object.js');
var Util = require ('./utils.js');

const Asteroid = function (options) {
  MovingObject.call(this, options);
  this.color = options.radius || 'red';
  this.radius = options.radius || 10;
  this.vel = options.vel || randomVec(5);
};
Util.inherits(Asteroid, MovingObject);

function randomVec (length) {
  const deg = 2 * Math.PI * Math.random();
  return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}
// Scale the length of a vector by the given amount.

let a = new Asteroid({ pos: [80, 80]});
a.draw();
a.move();
a.draw();

module.exports = Asteroid;
