// 10. Output not unique elements from the array of elements

const getNotUniqueElements = (array) => [...new Set(array
  .filter((value, index, self) => self.indexOf(value) !== index))];

export default getNotUniqueElements;
