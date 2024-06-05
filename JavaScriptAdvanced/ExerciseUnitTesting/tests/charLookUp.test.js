const { default: expect } = require('expect');
const lookupChar = require('../charLookUp');

// ◦ If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
// ◦ If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index".
// ◦ If both parameters have correct types and values - return the character at the specified index in the string.
test('if the recieved params are string and number', () => {
  expect(lookupChar(1, 'nig')).toBeUndefined();
  expect(lookupChar({}, [])).toBeUndefined();
  expect(lookupChar([], {})).toBeUndefined();
  expect(lookupChar(null, undefined)).toBeUndefined();
  expect(lookupChar(120, NaN)).toBeUndefined();
});

test('if the index is out of bounds', () => {
  expect(lookupChar('stefan', 7)).toBe('Incorrect index');
  expect(lookupChar('opaBartmi', -2)).toBe('Incorrect index');
  expect(lookupChar('ImaLiBagashhhhh', 100)).toBe('Incorrect index');
});

test('if the functionality to return the char at the current index works', () => {
  expect(lookupChar('stefan', 0)).toBe('s');
  expect(lookupChar('imali', 4)).toBe('i');
  expect(lookupChar('opaKakSi', 2)).toBe('a');
  expect(lookupChar('stefan', 5)).toBe('n');
});
