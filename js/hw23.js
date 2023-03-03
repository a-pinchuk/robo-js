const newArray = [7, 12, 4, 3, 8, 9, 2, 6, 4, 5];

let sum = 0;
newArray.forEach(element => {
  if (typeof element === 'number') {
    sum += element;
  }
});

console.log('Сумма елементів: ', sum);

// ------------------------------------------------

let min = newArray[0];
let max = 0;

newArray.forEach(element => {
  if (typeof element === 'number') {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
});
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);

// ------------------------------------------------

for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += '#';
  }
  console.log(str);
}

// ------------------------------------------------
