class Clock {
  constructor() {
    const date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime();
      setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    this.hours = this.hours % 24;
    this.printTime();
  }
}

// const clock = new Clock();


// addNumbers

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    completionCallback(sum);
  } else {
    reader.question('Pick a number', function(res) {
      let num = parseInt(res);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


// absurdBubbleSort

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}?`, function(res) {
    if (res === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i+1], function(res) {
      if (res === true) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

// absurdBubbleSort([4, 3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
// });


// myBind

Function.prototype.myBind = function (context) {
  return () => {
    this.apply(context);
  };
}

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"
