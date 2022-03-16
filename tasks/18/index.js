// 18. Output count of all letters from the string like object.
// Example 'Some interesting string' -> {
//  s: 3,
//  o: 1,
//  m: 1,
//  e: 3,
// ...
// }

const getCountLetters = (string) => string
  .split('').reduce((acc, letter) => {
    if (letter === ' ') return acc;
    const modifiedLetter = letter.toLowerCase();
    const count = acc[modifiedLetter] ? acc[modifiedLetter] + 1 : 1;
    return { ...acc, [modifiedLetter]: count };
  }, {});

export default getCountLetters;
