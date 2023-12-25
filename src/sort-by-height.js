const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      let next = j + 1;
      if (arr[j] === -1) {
        continue;
      }
      if (arr[next] == -1) {
        let k = j + 2;
        while(k < arr.length) {
          if (arr[k] != -1) {
            next = k;
            break;
          }
          k++;
        }
        if (next != k) {
          continue;
        }
      }
      if (arr[next] < arr[j]) {
        let tmp = arr[next];
        arr[next] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
