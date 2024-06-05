const { default: expect } = require('expect');
const mathEnforcer = require('../mathEnforcer');

// • addFive(num) - A function that accepts a single parameter:
// ◦ If the parameter is NOT a number, the function should return undefined.
// ◦ If the parameter is a number, add 5 to it, and return the result.
// • subtractTen(num) - A function that accepts a single parameter:
// ◦ If the parameter is NOT a number, the function should return undefined.
// ◦ If the parameter is a number, subtract 10 from it, and return the result.
// • sum(num1, num2) - A function that accepts two parameters:
// ◦ If any of the 2 parameters is NOT a number, the function should return undefined.
// ◦ If both parameters are numbers, the function should return their sum.

test('If addFive(num) recieves Not a number', () => {
  expect(mathEnforcer.addFive('woixmo')).toBeUndefined;
  expect(mathEnforcer.addFive([])).toBeUndefined;
  expect(mathEnforcer.addFive({})).toBeUndefined;
  expect(mathEnforcer.addFive(null)).toBeUndefined;
});

test('if addFive(num) recievs a num adds to the num five and returns it', () => {
  expect(mathEnforcer.addFive(1)).toEqual(6);
  expect(mathEnforcer.addFive(-3)).toEqual(2);
  expect(mathEnforcer.addFive(11)).toEqual(16);
  expect(mathEnforcer.addFive(10001)).toEqual(10006);
});

test('If subtractTen(num) recieves different from number', () => {
  expect(mathEnforcer.subtractTen('imaliBagsh') === 'undefined');
  expect(mathEnforcer.subtractTen([])).toBeUndefined;
  expect(mathEnforcer.subtractTen({})).toBeUndefined;
  expect(mathEnforcer.subtractTen(null)).toBeUndefined;
});


test('if subtractTen(num) recievs a num adds to the num five and returns it', () => {
  expect(mathEnforcer.subtractTen(1)).toEqual(-9);
  expect(mathEnforcer.subtractTen(-3)).toEqual(-13);
  expect(mathEnforcer.subtractTen(11)).toEqual(1);
  expect(mathEnforcer.subtractTen(12)).toEqual(2);
});


test('If sum(num1, num2) recieves different iunputs from number', () => {
  expect(mathEnforcer.sum('imaliBagsh', []) === 'undefined');
  expect(mathEnforcer.sum([], {})).toBeUndefined;
  expect(mathEnforcer.sum({}, 'iuxaiuxa')).toBeUndefined;
  expect(mathEnforcer.sum(null, undefined)).toBeUndefined;
});

test('If both values are numbers return their sum', () => {
  expect(mathEnforcer.sum(1, 2)).toEqual(3);
  expect(mathEnforcer.sum(11, 22)).toEqual(33);
  expect(mathEnforcer.sum(10, 40)).toEqual(50);
  expect(mathEnforcer.sum(-100001, 100002)).toEqual(1);
});