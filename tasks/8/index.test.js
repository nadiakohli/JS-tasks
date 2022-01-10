import getReplacedArray from './index';

const objects = [
  { i: 10 },
  { love: 1 },
  { you: 0 },
  { my: 3 },
  { baby: 14 },
];

test('Get a new array of objects in which keys will become values and values keys', () => {
  expect(getReplacedArray(objects)).toEqual([
    { 10: 'i' },
    { 1: 'love' },
    { 0: 'you' },
    { 3: 'my' },
    { 14: 'baby' },
  ]);
});
