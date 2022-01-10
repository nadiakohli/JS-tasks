import getUniqueElements from './index';

const array = [1, 5, 10, 1, 5, 10, 5, 10, 4, 8, 8, 10, 3];

test('Output only unique elements from the array of elements', () => {
  expect(getUniqueElements(array)).toEqual([1, 5, 10, 4, 8, 3]);
});
