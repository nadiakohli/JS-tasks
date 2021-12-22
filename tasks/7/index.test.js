import getReplacedArray from './index';

const objects = [
  { age: 10 },
  { age: 1 },
  { age: 0 },
  { age: -32 },
  { age: 14 },
  { age: -54 },
  { age: 1 },
];

test('Get a new array of objects where positive values dividing by 2, negative values multiplying by -1', () => {
  expect(getReplacedArray(objects)).toEqual([
    { age: 5 },
    { age: 0.5 },
    { age: 0 },
    { age: 32 },
    { age: 7 },
    { age: 54 },
    { age: 0.5 },
  ]);
});
