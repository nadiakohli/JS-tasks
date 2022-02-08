import getCountLetters from './index';

test('Output count of letter s', () => {
  expect(getCountLetters('Some interesting string')).toEqual(3);
});
