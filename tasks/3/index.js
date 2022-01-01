/* eslint-disable no-else-return */
// 3. From the array numbers to deduce a new array in which to replace
// positive values on 1, negative values on -1, zero values leave

const getReplacedArray = (array) => array
  .map((value) => {
    if (value > 0) {
      return 1;
    } else if (value < 0) {
      return -1;
    } else {
      return 0;
    }
  });

export default getReplacedArray;
