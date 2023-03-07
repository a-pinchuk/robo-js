//! Функція, яка перевіряє об'єкт на пустоту:
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

//! Об'єкт user з полями name, age та методом sayHello:
const user = {
  name: 'John',
  age: 30,
  sayHello: function () {
    console.log(`Я ${this.name}, мені ${this.age} років`);
  },
};

//!   Об'єкт калькулятор з методами ask, sum та mul:
const calculator = {
  num1: null,
  num2: null,
  ask: function () {
    this.num1 = prompt('Введіть перше число:');
    this.num2 = prompt('Введіть друге число:');
  },
  sum: function () {
    return Number(this.num1) + Number(this.num2);
  },
  mul: function () {
    return Number(this.num1) * Number(this.num2);
  },
};

calculator.ask();
console.log(calculator.sum()); // виведе суму чисел
console.log(calculator.mul()); // виведе добуток чисел
