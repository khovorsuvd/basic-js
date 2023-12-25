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
  let board = [];
  for (let row = 0; row < matrix.length; row++) {
    board.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      board[row].push(0);
    }
  }
  let directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (!matrix[row][col]) {
        continue;
      }
      board[row][col] = 1;
      for (let i = 0; i < directions.length; i++) {
        let rowStep = directions[i][0];
        let colStep = directions[i][1];
        let rowNext = row + rowStep;
        let colNext = col + colStep;
        if (rowNext < 0 || colNext < 0 || 
            rowNext > matrix.length ||
            colNext > matrix[row].length) {
          continue;
        }
        if (!matrix[rowNext][colNext]) {
          board[rowNext][colNext] += 1;
        }
      }
    }
  }
  return board;
}

module.exports = {
  minesweeper
};
