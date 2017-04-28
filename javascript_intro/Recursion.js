const range = (start, end) => {
  if (end <= start + 1) {
    return [];
  }
  let result = [start + 1];
  return result.concat(range(start+1, end));
};

const expOne = (base, exp) => {
  if ( exp === 0 ) {
    return 1;
  }
  return base * expOne(base, exp - 1);
};

const expTwo = (base, exp) => {
  if ( exp === 0 ) {
    return 1;
  }
  if ( exp === 1 ) {
    return base;
  }
  // even
  if ( exp % 2 === 0 ) {
    let x = expTwo(base, exp/2);
    return x * x;
  } else {
    let y = expTwo(base,(exp-1)/2);
    return base * y * y;
  }
};

const fibonacci = (n) => {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0,1];
  }
  let last = fibonacci(n-1);
  last.push(last[last.length-1] + last[last.length-2]);
  return last;
};

const bSearch = (array, target) => {
  if (array.length === 0) {
    return null;
  }
  let pivot = Math.floor(array.length / 2);
  if (target === array[pivot]) {
    return pivot;
  } else if (target < array[pivot]) {
    return bSearch(array.slice(0,pivot), target);
  } else { // target > array[pivot]
    if (bSearch(array.slice(pivot+1,array.length), target) !== null) {
      return pivot + 1 + bSearch(array.slice(pivot+1,array.length), target);
    } else {
      return null;
    }
  }
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid, array.length));

  return myMerge(left, right);
};

const myMerge = (left, right) => {
  let result = [];
  while (!(left.length === 0) && !(right.length === 0)) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  return result.concat(left).concat(right);
};

const subsets = (array) => {
  if (array.length === 0) {
    return [[]];
  }
  let pivot = array[0];
  let prevSubset = subsets(array.slice(1,array.length));
  let newSubset = prevSubset.map(el => [pivot].concat(el));
  return prevSubset.concat(newSubset);
};

const makeChange = (amount, coins) => {
  if (amount < coins[coins.length-1] || coins.length === 0) {
    return [];
  }

  let result = [];
  while (amount >= coins[0]) {
    result.push(coins[0]);
    amount = amount - coins[0];
  }
  return result.concat(makeChange(amount, coins.slice(1,coins.length)));
};

const makeOptChange = (amount, coins) => {
  let result = makeChange(amount, coins);

  for (var i = 1; i < coins.length; i++) {
    let newCoins = coins.slice(i, coins.length);
    let tempChange = makeChange(amount, newCoins);
    let tempChangeSum = tempChange.reduce((a, b) => a + b, 0);
    let resultSum = result.reduce((a, b) => a + b, 0);
    if ( result.length > tempChange.length || resultSum < tempChangeSum) {
      result = makeChange(amount, coins.slice(i, coins.length));
    }
  }
  return result;
};


console.log(makeOptChange(21, [10, 7, 2]));
