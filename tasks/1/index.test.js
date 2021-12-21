import getMinMaxAvg from './index';

const objects = [
  { age: 10 },
  { age: 1 },
  { age: 32 },
  { age: 14 },
  { age: 54 },
  { age: 1 },
];

test('Find min, max, avg from array of objects', () => {
  expect(getMinMaxAvg(objects)).toEqual({ min: 1, max: 54, avg: 27.5 });
});
