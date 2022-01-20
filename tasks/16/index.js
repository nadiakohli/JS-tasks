// 16. From the array of objects to output an array of objects whose values do not
// fall under the selected conditions (greater than 10 and less than 100)

const getFilteredArray = (array) => array
  .filter((obj) => !(obj.some > 10 && obj.some < 100));

export default getFilteredArray;
