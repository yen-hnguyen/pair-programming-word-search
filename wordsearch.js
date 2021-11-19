const wordSearch = (letters, word) => {
  if (letters === [] || !word || typeof word !== "string") return false;

  let reversedWord = word.split("").reverse().join("");
  reversedWord = reversedWord.toUpperCase();
  word = word.toUpperCase();

  // searching horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reversedWord)) return true;
  }

  // transpose the array
  let verticalArr = [];
  for (let i = 0; i < letters.length; i++) {
    verticalArr[i] = [];
    for (let j = 0; j < letters[i].length; j++) {
      verticalArr[i].push(letters[j][i]);
    }
  }

  // seaching vertically
  const verticalJoin = verticalArr.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.includes(reversedWord)) return true;
  }

  return false;
};

module.exports = wordSearch;
