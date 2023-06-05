import analyzeArray from './analyzeArray';

test('Return an object with correct properties', () => {
  expect(analyzeArray([1, 2, 4, 6, 9])).toStrictEqual({
    average: 4,
    min: 1,
    max: 9,
    length: 5
  });

  expect(analyzeArray([1, 1, 1, 1, 1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5
  });
});