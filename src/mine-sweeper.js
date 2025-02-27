const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  const resultMatrix = Array.from({length: rows}, () => Array(cols));

  let mines = 0;

  for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
      mines = 0;

      if (i > 0){
        if (matrix[i - 1][j - 1]) mines += 1;
        if (matrix[i - 1][j]) mines += 1;
        if (matrix[i - 1][j + 1]) mines += 1;
      }

      if (i < rows - 1){
        if (matrix[i + 1][j - 1]) mines += 1;
        if (matrix[i + 1][j]) mines += 1;
        if (matrix[i + 1][j + 1]) mines += 1;
      }

      if (matrix[i][j - 1]) mines += 1;
      if (matrix[i][j + 1]) mines += 1;


      resultMatrix[i][j] = mines;
    }
  }

  return resultMatrix;
}

module.exports = {
  minesweeper
};
