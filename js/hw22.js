let num1 = prompt('Введіть перше число:');
let num2 = prompt('Введіть друге число:');

if (num1 === '' || num2 === '') {
  alert('Помилка: Одне з полів не заповнене');
} else if (num2 == 0) {
  alert('Помилка: Друге число не може бути 0');
} else {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (num1 < num2) {
    let confirmation = confirm('Ви впевнені, що хочете продовжити операцію?');
    if (confirmation) {
      let diff = num1 - num2;
      alert(`Різниця: ${diff}`);
    }
  } else {
    let sum = num1 + num2;
    let diff = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;

    alert(`Сума: ${sum}\nРізниця: ${diff}\nДобуток: ${product}\nЧастка: ${quotient}`);
  }
}
