const createCalculator = require('./addSubtract');

test('createCalculator should return an object', () => {
  const calc = createCalculator();
  expect(typeof calc).toBe('object');
});

test('createCalculator object should have add, subtract and get methods', () => {
  const calc = createCalculator();
  expect(typeof calc.add).toBe('function');
  expect(typeof calc.subtract).toBe('function');
  expect(typeof calc.get).toBe('function');
});

test('createCalculator should keep internal sum that can’t be modified from the outside', () => {
  const calc = createCalculator();
  calc.value = 20;
  expect(calc.get()).toBe(0);
});

test('add() and subtract() should take a parameter that can be parsed as a number', () => {
  const calc = createCalculator();
  calc.add(5);
  calc.subtract(2);
  expect(calc.get()).toBe(3);
  calc.add('7');
  calc.subtract('4');
  expect(calc.get()).toBe(6);
});

test('get() should return the value of the internal sum', () => {
  const calc = createCalculator();
  expect(calc.get()).toBe(0);
  calc.add(5);
  expect(calc.get()).toBe(5);
  calc.subtract(2);
  expect(calc.get()).toBe(3);
});