import getMultiplyingArray from './index';

const numbers = [23, 1, -5, 0, -6, 1, 54, 23];

test('Get a new array where each value multiplying on 2', () => {
  expect(getMultiplyingArray(numbers)).toEqual([46, 2, -10, 0, -12, 2, 108, 46]);
});
