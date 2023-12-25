const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let transformed = [];
  let discardInd = -1;
  let doubleInd = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      discardInd = i + 1;
    } else if (arr[i] === '--discard-prev') {
      if (transformed.length && arr[i - 1] === transformed[transformed.length - 1]) {
        transformed.pop();
      }
    } else if (arr[i] === '--double-next') {
      doubleInd = i + 1;
    } else if (arr[i] === '--double-prev') {
      if (transformed.length && arr[i - 1] === transformed[transformed.length - 1]) {
        transformed.push(transformed[transformed.length - 1]);
      }
    } else {
      if (discardInd === i) {
        continue;
      }
      if (doubleInd === i) {
        transformed.push(arr[i]);
      }
      transformed.push(arr[i]);
    }
  }
  return transformed;
}

module.exports = {
  transform
};
