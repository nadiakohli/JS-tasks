import getString from './index';

test('Output string with big letters', () => {
  expect(getString('SomE InterestinG StrinG')).toEqual('SOME INTERESTING STRING');
});
