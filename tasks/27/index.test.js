import getNewArray from './index';

test('Delete 2 elements from array which after second element', () => {
  expect(getNewArray([1, 4, 3, 0, 4, 5, 4])).toEqual([1, 4, 4, 5, 4]);
});
