import getString from './index';

test('Output string with small letters', () => {
  expect(getString('SomE InterestinG StrinG')).toEqual('some interesting string');
});
