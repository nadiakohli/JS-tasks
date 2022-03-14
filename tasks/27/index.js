// 27. Delete 2 elements from array which after second element

const getNewArray = (array) => {
  const spliceArr = new Array(...array);
  spliceArr.splice(2, 2);
  return spliceArr;
};

export default getNewArray;
