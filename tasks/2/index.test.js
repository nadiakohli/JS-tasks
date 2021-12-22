import getMinMaxAvg from './index';

const objects = [
  { age: 10 },
  { age: 27 },
  { age: 32 },
  { age: 14 },
  { age: 54 },
  { age: 1 },
];

test('Find min, max, avg from all elements of array', () => {
  expect(getMinMaxAvg(objects)).toEqual({ min: 1, max: 54, avg: 23 });
});
