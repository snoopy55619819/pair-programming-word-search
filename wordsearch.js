const wordSearch = (letters, word) => {
    if (!letters.length) return false;
  
    const horizontalJoin = joinToString(letters);
    if (isWordInSplitArray(horizontalJoin, word))
      return true;
  
    const verticalJoin = joinToString(transposeMatrix(letters));
    console.log(verticalJoin);
    if (isWordInSplitArray(verticalJoin, word))
      return true;
  
    return false;
  }
  
  const isWordInSplitArray = (arrayOfLetters, word) => {
    for (letter of arrayOfLetters) {
      if (letter.includes(word))
        return true;
    }
  }
  
  const joinToString = (array) => array.map(ls => ls.join(''));
  
  const transposeMatrix = (matrix) => {
    const resultMatrix = [];
    for (const ind in matrix[0]) {
      const newRow = [];
      for (const arr of matrix) {
        newRow.push(arr[ind]);
      }
      resultMatrix.push(newRow);
    }
    return resultMatrix;
  }
  module.exports = wordSearch
  
  