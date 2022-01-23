// 8. From objects of an array to deduce a new array with
// objects in which keys will become values and values keys

const getReplacedArray = (array) => array.map((obj) => {
  const arrayOfObjects = Object.entries(obj).flat();
  return { [arrayOfObjects[1]]: arrayOfObjects[0] };
});

export default getReplacedArray;
