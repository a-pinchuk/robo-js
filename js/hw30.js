function sum(a, b) {
  return a + b;
}

function sumArray(array) {
  let sum = 0;
  array.forEach(element => {
    if (typeof element === 'number') {
      sum += element;
    }
  });
  return sum;
}

function maxValueArray(array) {
  let max = 0;

  array.forEach(element => {
    if (typeof element === 'number') {
      if (element > max) {
        max = element;
      }
    }
  });

  return max;
}

function minValueArray(array) {
  let min = array[0];

  array.forEach(element => {
    if (typeof element === 'number') {
      if (element < min) {
        min = element;
      }
    }
  });

  return min;
}

function Accumulator(initialValue) {
  this.value = initialValue;

  this.increment = function () {
    this.value += 1;
    return this;
  };

  this.decrement = function () {
    this.value -= 1;
    return this;
  };
}

function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);
  const initialValueCopy = initialValue;

  this.clear = function () {
    this.value = initialValueCopy;
    return this;
  };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
  }
  if (b === 0) {
    console.log('Параметр не можна ділити на 0');
  }
  return a / b;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
