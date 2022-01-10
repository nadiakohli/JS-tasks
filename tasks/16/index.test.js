import getFilteredArray from './index';

const objects = [
  { some: 10 },
  { some: 12 },
  { some: -3 },
  { some: 100 },
  { some: 33 },
  { some: 23 },
];

test(`From the array of objects to output an array of objects whose values do not
  fall under the selected conditions (greater than 10 and less than 100)`, () => {
  expect(getFilteredArray(objects)).toEqual([
    { some: 10 },
    { some: -3 },
    { some: 100 },
  ]);
});
