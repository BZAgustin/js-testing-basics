/* eslint-disable no-undef */
import capitalize from './capitalize';

test('Capitalizes the first letter', () => {
  expect(capitalize('agustin')).toBe('Agustin');
});

test('Returns an empty string', () => {
  expect(capitalize('')).toBe('');
});