import getFilteredArray from './index';

const objects = [
  { some: 10 },
  { some: 12 },
  { some: -3 },
  { some: 100 },
  { some: 33 },
  { some: 23 },
];

test(`Output an array of objects whose values are greater
  than 10 and less than 100 from the array of objects`, () => {
  expect(getFilteredArray(objects)).toEqual([
    { some: 12 },
    { some: 33 },
    { some: 23 },
  ]);
});
