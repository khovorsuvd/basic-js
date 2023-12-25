const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currSign = str[0];
  let currSignCount = 1;
  let answer = '';
  for (let i = 1; i <= str.length; i++) {
    if (currSign === str[i]) {
      currSignCount++;
    } else {
      if (currSignCount > 1) {
        answer += currSignCount;
      }
      answer += currSign;
      currSign = str[i];
      currSignCount = 1;
    }
  }
  return answer;
}

module.exports = {
  encodeLine
};
