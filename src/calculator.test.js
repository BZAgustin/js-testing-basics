import { add, substract, divide, multiply } from './calculator';

test('Adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('Substracts Y from X', () => {
  expect(substract(2, 1)).toBe(1);
});

test('Divides X by Y', () =>{
  expect(divide(10, 2)).toBe(5);
});

test('Multiplies X times Y', () => {
  expect(multiply(2, 5)).toBe(10);
});

