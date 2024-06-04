const rgbToHexColor = require('./RGBtoHex');

test('converts valid RGB values to hexadecimal color', () => {
  expect(rgbToHexColor(255, 0, 0)).toBe('#FF0000');
  expect(rgbToHexColor(0, 255, 0)).toBe('#00FF00');
  expect(rgbToHexColor(0, 0, 255)).toBe('#0000FF');
  expect(rgbToHexColor(0, 0, 0)).toBe('#000000');
  expect(rgbToHexColor(255, 255, 255)).toBe('#FFFFFF');
});

test('returns undefined for invalid RGB values', () => {
  expect(rgbToHexColor(-1, 0, 0)).toBeUndefined();
  expect(rgbToHexColor(0, -1, 0)).toBeUndefined();
  expect(rgbToHexColor(0, 0, -1)).toBeUndefined();
  expect(rgbToHexColor(256, 0, 0)).toBeUndefined();
  expect(rgbToHexColor(0, 256, 0)).toBeUndefined();
  expect(rgbToHexColor(0, 0, 256)).toBeUndefined();
});

test('returns undefined for non-integer RGB values', () => {
  expect(rgbToHexColor(0.5, 0, 0)).toBeUndefined();
  expect(rgbToHexColor(0, 0.5, 0)).toBeUndefined();
  expect(rgbToHexColor(0, 0, 0.5)).toBeUndefined();
});

test('returns undefined for non-number RGB values', () => {
  expect(rgbToHexColor('0', 0, 0)).toBeUndefined();
  expect(rgbToHexColor(0, '0', 0)).toBeUndefined();
  expect(rgbToHexColor(0, 0, '0')).toBeUndefined();
});