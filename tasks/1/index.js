// 1. From the array of objects to output the object
// in which there will be min, max and arithmetic mean min max

const getMinMaxAvg = (objects) => {
  const minNumber = [...objects].sort((min, max) => min.age - max.age)[0].age;
  const maxNumber = [...objects].sort((min, max) => max.age - min.age)[0].age;
  const minMaxAverageNumbers = (minNumber + maxNumber) / 2;

  return {
    min: minNumber,
    max: maxNumber,
    avg: minMaxAverageNumbers,
  };
};

export default getMinMaxAvg;
