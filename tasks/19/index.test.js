import getReversedString from './index';

test('Output reverse string', () => {
  expect(getReversedString('Some interesting string')).toEqual('gnirts gnitseretni emoS');
});
