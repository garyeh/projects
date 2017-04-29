const Util = {
  inherits: function (childClass, parentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
  },

  scale: function (vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;
