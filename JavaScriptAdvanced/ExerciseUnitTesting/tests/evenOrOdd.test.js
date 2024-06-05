const { default: expect } = require('expect');
const isOddOrEven = require('../evenOrOdd');

test('If passed parametar is not straing', () => {
  expect(isOddOrEven(2)).toBeUndefined();
  expect(isOddOrEven([])).toBeUndefined();
  expect(isOddOrEven({})).toBeUndefined();
  expect(isOddOrEven(null)).toBeUndefined();
  expect(isOddOrEven(undefined)).toBeUndefined();
});

test('If passed param is string return even based on the length of the string', () => {
  expect(isOddOrEven('op')).toBe('even');
  expect(isOddOrEven('stefan')).toBe('even');
  expect(isOddOrEven('jo')).toBe('even');
  expect(isOddOrEven('an')).toBe('even');
});

test('If passed param is string return odd based on the length of the string', () => {
  expect(isOddOrEven('opa kak e')).toBe('odd');
  expect(isOddOrEven('stefn')).toBe('odd');
  expect(isOddOrEven('joana')).toBe('odd');
  expect(isOddOrEven('anieliq')).toBe('odd');
});