// 23. Write function which will cut a string after 8 symbol and add 3 dots at the end of the row

const getString = (string) => {
  const letters = string.split('');
  letters.reduce((acc, letter) => {
    if (letter === ' ') return acc;
    const modifiedLetters = letters.splice(8, 3, '...');
    return modifiedLetters;
  }, []);
  return letters.join('');
};

export default getString;
