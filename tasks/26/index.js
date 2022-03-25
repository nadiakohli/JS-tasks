// 26. Delete third element from array. Return new array without deleted element

const getNewArray = (array) => {
  const newArr = new Array(...array);
  newArr.splice(2, 1);
  return newArr;
};

export default getNewArray;
