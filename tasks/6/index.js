// 6. Output a new array from the Numbers array,
// divide the positive values by 2, multiply the negative values by -1

const getReplacedArray = (array) => array.map((number) => {
  if (number > 0) {
    return number / 2;
  } if (number < 0) {
    return number * -1;
  }
  return 0;
});

export default getReplacedArray;
