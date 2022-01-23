// 13. Output numbers greater than 10 and less than 100 from the array of numbers

const getFilteredArray = (array) => array
  .filter((item) => item < 100 && item > 10);

export default getFilteredArray;
