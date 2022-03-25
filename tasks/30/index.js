// 30. Fill an array of 5 elements as follows: write 'x' into the first element,
// 'xx' into the second, 'xxx' into the third and so on.

const getFilledArray = () => {
  const array = [];
  let str = '';
  for (let el = 0; el < 5; el += 1) {
    str += 'x';
    array.push(str);
  }
  return array;
};

export default getFilledArray;
