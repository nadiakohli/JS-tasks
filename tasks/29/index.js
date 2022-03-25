// 29. Replace 5 element of array on 'test'

const getNewArray = (array) => {
  array.splice(5, 1, 'test');
  return array;
};

export default getNewArray;
