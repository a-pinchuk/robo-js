Array.prototype.pow = function (n) {
  return this.map(function (x) {
    return Math.pow(x, n);
  });
};

const array = [1, 2, 3];
console.log(array.pow(3));

function a() {
  alert('homework33');
}

Function.prototype.defer = function (n) {
  setTimeout(this, n);
};

a.defer(1000);
