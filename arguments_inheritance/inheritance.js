Function.prototype.inherits = function (parent, child) {
  var Surrogate = function() {};
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate();
  child.prototype.constructor = child;
};

function MovingObject () {}

MovingObject.prototype.fly = function () {
  console.log("I\'m flying!");
};

function Ship () {}
Ship.prototype = Object.create(MovingObject.prototype);
Ship.prototype.constructor = Ship;

function Asteroid () {}
Asteroid.prototype = Object.create(MovingObject.prototype);
Asteroid.prototype.constructor = Asteroid;

let s = new Ship();
s.fly();
