import getNewArray from './index';

test("Replace 5 element of array on 'test'", () => {
  expect(getNewArray([1, 4, 3, 0, 4, 5, 4])).toEqual([1, 4, 3, 0, 'test', 5, 4]);
});
