function sum() {
  let total = 0;
  let args = Array.from(arguments);
  args.forEach(arg => {
    total = total + arg;
  });
  return total;
}

const es6Sum = (...nums) => {
  let total = 0;
  nums.forEach(num => {
    total = total + num;
  });
  return total;
};

// console.log(sum(1,2,3,4,5));
// console.log(es6Sum(1,2,3,4,5));

// myBind with arguments
Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

// curriedSum

const curriedSum = (numArgs) => {
  let numbers = [];
  let _curriedSum = function(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      let total = 0;
      numbers.forEach(num => {
        total += num;
      });
      return total;
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

console.log(curriedSum(4)(1)(2)(4)(6));

Function.prototype.curry = function (numArgs) {
  let collection = [];
  let _curry = (arg) => {
    collection.push(arg);
    if (collection.length === numArgs) {
      return this.apply(_curry, collection);
    } else {
      return _curry;
    }
  };
  return _curry;
};

Function.prototype.spreadCurry = function (numArgs) {
  let collection = [];
  let _curry = (arg) => {
    collection.push(arg);
    if (collection.length === numArgs) {
      return this.call(_curry, ...collection);
    } else {
      return _curry;
    }
  };
  return _curry;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(sumThree.spreadCurry(3)(3)(4)(5));
