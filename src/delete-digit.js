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
  let initialNum = n.toString().split('');
  let maxNum = 0;
  for (let i = 0; i < initialNum.length; i++) {
    let arr = [];
    for (let j = 0; j <initialNum.length; j++) {
      if (j != i) {
        arr.push(initialNum[j]);
      }
    }
    let number = Number(arr.join(''));
    if (maxNum < number ) {
      maxNum = number;
    }
  }
  return maxNum;
}

module.exports = {
  deleteDigit
};
