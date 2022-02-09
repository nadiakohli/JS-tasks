import getFilledArray from './index';

test("Fill an array of 5 elements as follows: write 'x' into the first element...", () => {
  expect(getFilledArray()).toEqual(['x', 'xx', 'xxx', 'xxxx', 'xxxxx']);
});
