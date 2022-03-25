// 26. Delete third element from array. Return new array without deleted element

const getNewArray = (array) => {
  const spliceElement = [...array];
  spliceElement.splice(2, 1);
  return spliceElement;
};

export default getNewArray;
