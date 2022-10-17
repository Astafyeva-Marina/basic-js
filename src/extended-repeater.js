const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let line = '';
  options.repeatTimes = (options.hasOwnProperty('repeatTimes')) ? + options.repeatTimes : 0; 
  options.separator = (options.hasOwnProperty('separator')) ? String(options.separator) : '+'; 
  options.addition = (options.hasOwnProperty('addition')) ? String(options.addition) : ''; 
  options.additionRepeatTimes = (options.hasOwnProperty('additionRepeatTimes'))? + options.additionRepeatTimes : 0; 
  options.additionSeparator = (options.hasOwnProperty('additionSeparator'))? String(options.additionSeparator) : '|';

  if (options.addition)
  str += repeater (options.addition,{repeatTimes: options.additionRepeatTimes, separator: options.additionSeparator});
  line = str;

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    line += options.separator + str;
  }
  return line;
}


module.exports = {
  repeater
};
