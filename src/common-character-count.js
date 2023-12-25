const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s1 = s1.toLocaleLowerCase().split('').sort();
  s2 = s2.toLocaleLowerCase().split('').sort();
  let l = 0;
  let r = 0;
  let result = 0;
  while (l < s1.length && r < s2.length) {
    if (s1[l] === s2[r]) {
      result++;
      l++;
      r++;
    } else if (s1[l] < s2[r]) {
      l++;
    } else {
      r++;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
