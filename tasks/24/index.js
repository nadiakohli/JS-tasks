// 24. Return the string with the replaced values. Replace all vowels letters on 'b' letter

const getString = (string) => {
  const vowels = ['a', 'o', 'i', 'e', 'u'];
  const letters = string.split('');
  const indexes = letters
    .reduce((acc, vowel, index) => vowels.includes(vowel) ? [...acc, index] : acc, []);
  return letters.map((letter, index) => indexes.includes(index) ? 'b' : letter).join('');
};

export default getString;
