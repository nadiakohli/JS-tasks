// 7. From the array objects to deduce a new array with objects, thus to divide positive
// values of objects on 2, to multiply negative values of objects on -1

const getReplacedArray = (array) => array
  .map((object) => ({ age: object.age >= 0 ? object.age / 2 : object.age * -1 }));

export default getReplacedArray;
