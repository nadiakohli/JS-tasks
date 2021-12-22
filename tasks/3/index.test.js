import getReplacedArray from './index';

const numbers = [23, 1, -5, 0, -6, 1, 54, 23];

test('Get a new array where positive values are replaced by 1, negative by -1', () => {
  expect(getReplacedArray(numbers)).toEqual([1, 1, -1, 0, -1, 1, 1, 1]);
});
