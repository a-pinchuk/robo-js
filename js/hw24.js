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
