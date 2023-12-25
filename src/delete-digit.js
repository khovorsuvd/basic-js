const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = [...n.toString()];
  let max = -n;
  for (let i = 0; i < digits.length; i++) {
    let tmp = digits[i];
    digits[i] = '';
    let number = parseInt(digits.join(''));
    if (number > max) {
      max = number;
    }  
    digits[i] = tmp;
  }
  return max;
}

module.exports = {
  deleteDigit
};
