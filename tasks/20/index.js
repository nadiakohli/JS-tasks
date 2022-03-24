// 20. Output strange string. One letter small, one letter big, one small, one big,...
// Example: SoMe InTeReStInG...

const getString = (string) => {
  const letters = string.split('');
  const filteredLetters = letters.filter((letter) => letter !== ' ');
  const indexSpaces = letters.reduce((acc, letter, index) => {
    if (letter === ' ') return [...acc, index];
    return acc;
  }, []);

  const modifiedLetters = filteredLetters.map((letter, index) => index % 2 === 0
    ? letter.toUpperCase()
    : letter);

  indexSpaces.map((index) => modifiedLetters.splice(index, 0, ' '));
  return modifiedLetters.join('');
};

export default getString;
