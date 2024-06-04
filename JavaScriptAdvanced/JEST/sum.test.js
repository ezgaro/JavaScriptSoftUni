test('mock implementation', () => {
  const mock = jest.fn(x => 42 + x);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});