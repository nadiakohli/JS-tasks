import getUniqueElements from './index';

const objects = [
  { some: 1 },
  { some: 2 },
  { some: 10 },
  { some: 2 },
  { some: 4 },
  { some: 10 },
  { some: 2 },
];

test('Output only unique elements from the array of elements', () => {
  expect(getUniqueElements(objects)).toEqual([
    { some: 1 },
    { some: 2 },
    { some: 10 },
    { some: 4 },
  ]);
});
