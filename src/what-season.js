const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  
  let month;
  try {
    date.valueOf();
    month = date.getMonth();
  } catch(err) {
    throw Error('Invalid date!');
  }
  
  month %= 11;
  if (month < 2) {
    return 'winter';
  }
  if (month < 5) {
    return 'spring';
  }
  if (month < 8) {
    return 'summer';
  }
  return 'autumn';
}

module.exports = {
  getSeason
};
