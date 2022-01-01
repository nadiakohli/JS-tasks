// 2. From the array of objects to output an object in which there will
// be min, max and arithmetic mean of all objects in the array

const getMinMaxAvg = (array) => {
  const averageAllObj = array.reduce((acc, val) => (acc + val.age), 0) / array.length;
  const minObj = [...array].sort((min, max) => min.age - max.age)[0].age;
  const maxObj = [...array].sort((min, max) => max.age - min.age)[0].age;

  return {
    avg: averageAllObj,
    min: minObj,
    max: maxObj,
  };
};

export default getMinMaxAvg;
