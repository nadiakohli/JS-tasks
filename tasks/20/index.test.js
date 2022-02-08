import getString from './index';

test('Output strange string', () => {
  expect(getString('Some interesting string')).toEqual('SoMe InTeReStInG sTrInG');
});
