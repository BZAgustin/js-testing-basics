import caesarCipher from "./caesarCipher";

test('Shift the string by a factor of 1', () => {
  expect(caesarCipher('Agustin', 1)).toBe('Bhvtujo');

  expect(caesarCipher('XyZw', 1)).toBe('YzAx');

  expect(caesarCipher('Colo!.,"', 1)).toBe('Dpmp!.,"');
});

