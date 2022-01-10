import getFilteredArray from './index';

const numbers = [2, 10, 100, 37, 23, -10, 13, 99, -7, 9];

test(`Output numbers from the array of numbers that do not fall under
  the selected conditions (greater than 10 and less than 100)`, () => {
  expect(getFilteredArray(numbers)).toEqual([2, 10, 100, -10, -7, 9]);
});
