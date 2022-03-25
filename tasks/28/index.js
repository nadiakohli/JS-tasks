// 28. Delete third element from array, delete 3 elements after 5 element of array,
// add at the start of the array 10, add at the end of the array 4

const getNewArray = (array) => {
  // const firstSplice = [...[...array].splice(0, 2), ...[...array].splice(3)];
  // return [10, ...[...firstSplice].splice(0, 5), ...[...firstSplice].splice(8), 4];
  const firstSplice = [...array].splice(0, 2);
  const secondSplice = [...array].splice(3, array.length);
  const concatedArrays = firstSplice.concat(secondSplice).flat();
  concatedArrays.splice(5, 3);
  concatedArrays.unshift(10);
  concatedArrays.push(4);
  return concatedArrays;
};

export default getNewArray;
