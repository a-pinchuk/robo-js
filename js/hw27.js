function updateResult(elementId, result) {
  const element = document.getElementById(elementId);
  element.textContent = result;

  if (result < 0) {
    element.style.color = 'red';
  } else {
    element.style.color = 'green';
  }
}

function getColor(value, minValue, maxValue) {
  const intensity = 255 - Math.floor(((value - minValue) / (maxValue - minValue)) * 255);
  if (value >= 0) {
    return `rgb(0, ${intensity}, 0)`; // Зеленый
  } else {
    return `rgb(${intensity}, 0, 0)`; // Красный
  }
}

function updateResultWithColor(elementId, result, minValue, maxValue) {
  const element = document.getElementById(elementId);
  element.textContent = result;

  const color = getColor(result, minValue, maxValue);
  element.style.color = color;
}

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
    return;
  }
  updateResult('addResult', a + b);
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
    return;
  }
  updateResult('subtractResult', a - b);
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
    return;
  }
  updateResult('multiplyResult', a * b);
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Параметр не є числом');
    return;
  }
  if (b === 0) {
    console.log('Параметр не можна ділити на 0');
    return;
  }
  updateResult('divideResult', a / b);
}

function findMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  updateResultWithColor('minResult', min, min, max);
}

function findMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  updateResultWithColor('maxResult', max, min, max);
}

add(-25, 10);
subtract(15, 5);
multiply(3, 4);
divide(12, 3);
const sampleArray = [10, 9, 11, 9, 10];
findMin(sampleArray);
findMax(sampleArray);
