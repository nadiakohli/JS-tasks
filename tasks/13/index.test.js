import getFilteredArray from './index';

const numbers = [2, 10, 100, 37, 23, -10, 13, 99, -7, 9];

test('Output numbers greater than 10 and less than 100 from the array of numbers', () => {
  expect(getFilteredArray(numbers)).toEqual([37, 23, 13, 99]);
});
