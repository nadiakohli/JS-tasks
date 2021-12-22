import getMultiplyingArray from './index';

const objects = [
  { age: 10 },
  { age: 1 },
  { age: 32 },
  { age: 14 },
  { age: 54 },
  { age: 1 },
];

test('Get a new array where each value multiplying on 2', () => {
  expect(getMultiplyingArray(objects)).toEqual([
    { age: 20 },
    { age: 2 },
    { age: 64 },
    { age: 28 },
    { age: 108 },
    { age: 2 },
  ]);
});
