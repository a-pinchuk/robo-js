describe('Sum of two numbers', () => {
  it('should return 5', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should return 1', () => {
    const result = sum(0, 1);
    expect(result).toBe(1);
  });
});

describe('Sum of array elements', () => {
  it('should return 5 for [2, 3]', () => {
    const result = sumArray([2, 3]);
    expect(result).toBe(5);
  });

  it("should return 1 for [0, 1, '2', false]", () => {
    const result = sumArray([0, 1, '2', false]);
    expect(result).toBe(1);
  });

  it('should return 0 for []', () => {
    const result = sumArray([]);
    expect(result).toBe(0);
  });
});

describe('maxValueArray', () => {
  it('should return 8 for [2, 4, 7, 1, 8]', () => {
    const result = maxValueArray([2, 4, 7, 1, 8]);
    expect(result).toBe(8);
  });

  it('should return 5 for [-1, 0, 5, -3, 2]', () => {
    const result = maxValueArray([-1, 0, 5, -3, 2]);
    expect(result).toBe(5);
  });
});

describe('minValueArray', () => {
  it('should return 1 for [2, 4, 7, 1, 8]', () => {
    const result = minValueArray([2, 4, 7, 1, 8]);
    expect(result).toBe(1);
  });

  it('should return -3 for [-1, 0, 5, -3, 2]', () => {
    const result = minValueArray([-1, 0, 5, -3, 2]);
    expect(result).toBe(-3);
  });
});

describe('Accumulator', () => {
  it('should increment the value by 1', () => {
    const accumulator = new Accumulator(5);
    accumulator.increment();
    expect(accumulator.value).toBe(6);
  });

  it('should decrement the value by 1', () => {
    const accumulator = new Accumulator(5);
    accumulator.decrement();
    expect(accumulator.value).toBe(4);
  });
});

describe('CancelableAccumulator', () => {
  it('should increment the value by 1', () => {
    const cancelableAccumulator = new CancelableAccumulator(5);
    cancelableAccumulator.increment();
    expect(cancelableAccumulator.value).toBe(6);
  });

  it('should decrement the value by 1', () => {
    const cancelableAccumulator = new CancelableAccumulator(5);
    cancelableAccumulator.decrement();
    expect(cancelableAccumulator.value).toBe(4);
  });

  it('should reset the value to the initial value', () => {
    const cancelableAccumulator = new CancelableAccumulator(5);
    cancelableAccumulator.increment();
    cancelableAccumulator.decrement();
    cancelableAccumulator.clear();
    expect(cancelableAccumulator.value).toBe(5);
  });
});

describe('Arithmetic operations', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(-1, 1)).toEqual(0);
    expect(add(5.5, 4.5)).toEqual(10);
  });

  it('should subtract two numbers correctly', () => {
    expect(subtract(5, 2)).toEqual(3);
    expect(subtract(-1, 1)).toEqual(-2);
    expect(subtract(5.5, 4.5)).toEqual(1);
  });

  it('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toEqual(6);
    expect(multiply(-2, 2)).toEqual(-4);
    expect(multiply(3.5, 2)).toEqual(7);
  });

  it('should divide two numbers correctly', () => {
    expect(divide(6, 2)).toEqual(3);
    expect(divide(-6, 2)).toEqual(-3);
    expect(divide(7, 2)).toEqual(3.5);
    expect(divide(7, 0)).toEqual(Infinity);
  });
});

describe('Array operations', () => {
  it('should find the minimum value in an array', () => {
    expect(findMin([1, 2, 3])).toEqual(1);
    expect(findMin([-1, 0, 1])).toEqual(-1);
    expect(findMin([2.5, 1.5, 3.5])).toEqual(1.5);
  });

  it('should find the maximum value in an array', () => {
    expect(findMax([1, 2, 3])).toEqual(3);
    expect(findMax([-1, 0, 1])).toEqual(1);
    expect(findMax([2.5, 1.5, 3.5])).toEqual(3.5);
  });
});
