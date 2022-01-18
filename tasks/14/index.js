// 14. Output numbers from the array of numbers that do not fall under the
// selected conditions (greater than 10 and less than 100)

const getFilteredArray = (array) => array
  .filter(item => (typeof item === 'number') !== (item < 100 && item > 10));

export default getFilteredArray;
