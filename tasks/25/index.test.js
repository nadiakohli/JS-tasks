import getSum from './index';

test('Get sum of sum of the square roots of all even numbers in an integer array', () => {
  expect(getSum([1, 4, 3, 0, 4, 5, 4])).toEqual(6);
});
