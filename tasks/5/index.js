// 5. Output a new array of objects from the array of objects, multiplying their values by 2

const getMultiplyingArray = (array) => array
  .map((object) => ({ age: object.age * 2 }));

export default getMultiplyingArray;
