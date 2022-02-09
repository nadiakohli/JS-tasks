import getFilledArray from './index';

test("Fill in an array of 5 elements as follows: write '1' in the first element...", () => {
  expect(getFilledArray()).toEqual(['1', '22', '333', '4444', '55555']);
});
