import getCountElements from './index';

test('Given an array of numbers. Find out how many elements from the end...', () => {
  expect(getCountElements([4, 2, 0, 4, 0, 0, 1, 5, 2])).toEqual(6);
});

test('Given an array of numbers. Find out how many elements from the end (error message)...', () => {
  expect(getCountElements([0, 2, 0, 4, 0, 0, 1, 1, 1])).toEqual('All elements in the sum are equal 9');
});
