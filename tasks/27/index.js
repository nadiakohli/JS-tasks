// 27. Delete 2 elements from array which after second element

const getNewArray = (array) => {
  const spliceElements = [...array];
  spliceElements.splice(2, 2);
  return spliceElements;
};

export default getNewArray;
