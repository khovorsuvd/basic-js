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
  let result = '';
  const optionsHandled = handleOptions(options);
  for (let i = 0; i < optionsHandled.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < optionsHandled.additionRepeatTimes; j++) {
      result += optionsHandled.addition;
      if (j !== optionsHandled.additionRepeatTimes - 1) {
        result += optionsHandled.additionSeparator;
      }
    }
    if (i !== optionsHandled.repeatTimes - 1) {
      result += optionsHandled.separator;
    }
  }
  return result;
}

function handleOptions(options) {
  const optionsHandled = {
    'repeatTimes': 1,
    'separator': '+',
    'addition': '',
    'additionRepeatTimes': 1,
    'additionSeparator': '|',
  };
  for (sep of Object.keys(optionsHandled)) {
    if (options.hasOwnProperty(sep)) {
      optionsHandled[sep] = options[sep];
    }
  }
  return optionsHandled;
}

module.exports = {
  repeater
};
