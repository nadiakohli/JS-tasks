import getNewArray from './index';

test('Multiple manipulation of array', () => {
  expect(getNewArray([1, 4, 3, 0, 4, 5, 4, 3, 10, 5])).toEqual([10, 1, 4, 0, 4, 5, 5, 4]);
});
