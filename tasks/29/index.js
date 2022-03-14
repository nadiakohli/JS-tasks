// 29. Replace 5 element of array on 'test'

const getNewArray = (array) => {
  const arr = new Array(...array);
  arr.splice(5, 1, 'test');
  return arr;
};

export default getNewArray;
