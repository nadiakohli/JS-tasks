import getNewArray from './index';

test('Delete third element from array', () => {
  expect(getNewArray([1, 4, 3, 0, 4, 5, 4])).toEqual([1, 4, 0, 4, 5, 4]);
});
