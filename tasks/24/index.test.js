import getString from './index';

test('Output replaced string', () => {
  expect(getString('Some interesting string')).toEqual('Sbmb bntbrbstbng strbng');
});
