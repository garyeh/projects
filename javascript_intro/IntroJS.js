function myUniq(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if (result.includes(arr[i])) {
      continue;
    }
    result.push(arr[i]);
  }
  return result;
}

Array.prototype.myUniq = function() {
  let result = [];

  for(let i = 0; i < this.length; i++){
    if (result.includes(this[i])) {
      continue;
    }
    result.push(this[i]);
  }
  return result;
};

function twoSums(arr) {
  let result = [];
  for (var i = 0; i < (arr.length - 1); i++) {
    for (var j = (i + 1); j < (arr.length); j++) {
      if (arr[i] + arr[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
}
Array.prototype.twoSums = function() {
  let result = [];
  for (var i = 0; i < (this.length - 1); i++) {
    for (var j = (i + 1); j < (this.length); j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

function myTranspose(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push([]);
  }

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      result[i].push(arr[j][i]);
    }
  }
  return result;
}
Array.prototype.myTranspose = function() {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    result.push([]);
  }

  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      result[i].push(this[j][i]);
    }
  }
  return result;
};

function myEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
  return arr;
}

Array.prototype.myEach = function(fn) {
  for (var i = 0; i < this.length; i++) {
    fn(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(fn) {
  let result = [];
  this.myEach(el => result.push(fn(el)));
  return result;
};

Array.prototype.myInject = function(fn) {
  let result = this[0];
  this.slice(1,this.length).myEach(function(el){
    result = fn(result, el);
  });
  return result;
};

const multiplyByInject = (result, el) => {
  return el + result;
};

const bubbleSort = (array) => {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < array.length-1; i++) {
      for (var j = i+1; j < array.length; j++) {
        if (array[i] > array[j]) {
          sorted = false;
          let x = array[i];
          let y = array[j];
          array[i] = y;
          array[j] = x;
        }
      }
    }
  }
  return array;
};

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length-1; i++) {
      for (var j = i+1; j < this.length; j++) {
        if (this[i] > this[j]) {
          sorted = false;
          let x = this[i];
          let y = this[j];
          this[i] = y;
          this[j] = x;
        }
      }
    }
  }
  return this;
};

const substrings = (string) => {
  let result = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      result.push(string.slice(i,j+1));
    }
  }
  return result;
};

String.prototype.substrings = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i; j < this.length; j++) {
      result.push(this.slice(i,j+1));
    }
  }
  return result;
};
