import getString from './index';

test('Output cut string', () => {
  expect(getString('Some interesting string')).toEqual('Some int...');
});
