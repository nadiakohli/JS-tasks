// 17. Output count of letter 's' in the string

const getCountLetters = (string) => string
  .split('').reduce((acc, letter) => letter.toLowerCase() === 's' ? acc + 1 : acc, 0);

export default getCountLetters;
