import getReplacedArray from './index';

const numbers = [24, 1, -5, 0, -6, 1, 54, 22];

test('Get a new array where positive values dividing by 2, negative values multiplying by -1', () => {
  expect(getReplacedArray(numbers)).toEqual([12, 0.5, 5, 0, 6, 0.5, 27, 11]);
});
