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
  let ass = 1;
  let res = '';

  for (let i = 0; i < str.length; i++) {
    let type = str[i];
    if (str[i + 1] == type) {
      ass++;
    } else {
      if (ass == 1) {
        res += type;
      } else {
        res += (ass + type);
        ass = 1;
      }
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
