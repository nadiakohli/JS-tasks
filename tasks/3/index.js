// 3. From the array numbers to deduce a new array in which to replace
// positive values on 1, negative values on -1, zero values leave

const getReplacedArray = (array) => array
  .map(arr => {
    if (arr > 0) {
      return 1;
    } if (arr < 0) {
      return -1;
    }
    return 0;
  });

export default getReplacedArray;
