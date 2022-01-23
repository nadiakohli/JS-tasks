// 11. Output only unique elements from the array of objects

const getUniqueElements = (array) => [...new Map(array.map((item) => [item.some, item])).values()];

export default getUniqueElements;
