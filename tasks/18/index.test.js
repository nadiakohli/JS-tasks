import getCountLetters from './index';

test('Output count of letters like object', () => {
  expect(getCountLetters('Some interesting string')).toEqual({
    s: 3,
    o: 1,
    m: 1,
    e: 3,
    i: 3,
    n: 3,
    t: 3,
    r: 2,
    g: 2,
  });
});
