function Accumulator(initialValue) {
  this.value = initialValue;

  this.increment = function () {
    this.value += 1;
  };

  this.decrement = function () {
    this.value -= 1;
  };
}

function CancelableAccumulator(initialValue) {
  Accumulator.call(this, initialValue);
  const initialValueCopy = initialValue;

  this.clear = function () {
    this.value = initialValueCopy;
  };
}

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);
CancelableAccumulator.prototype.constructor = CancelableAccumulator;

const acc = new Accumulator(10);
const cancelableAcc = new CancelableAccumulator(20);
