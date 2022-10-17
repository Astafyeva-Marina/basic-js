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
  let one = s1.split("");
  let two = s2.split("");
  let result = [];

  for (let i = 0; i < one.length; i++) {
    if (two.includes(one[i])) {
      two.splice(two.indexOf(one[i]), 1);
      result.push(one[i]);
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
