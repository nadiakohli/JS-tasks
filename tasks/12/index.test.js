import getNotUniqueElements from './index';

const objects = [
  { some: 1 },
  { some: 2 },
  { some: 10 },
  { some: 2 },
  { some: 4 },
  { some: 10 },
  { some: 2 },
];

test('Output not unique elements from the array of objects', () => {
  expect(getNotUniqueElements(objects)).toEqual([{ some: 2 }, { some: 10 }]);
});
