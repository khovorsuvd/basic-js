const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null || typeof members[Symbol.iterator] !== 'function') {
    return false;
  }
  let name = [];
  for (let member of members) {
    if (typeof member === 'string') {
      let i = 0;
      while(i < member.length && member[i] == ' ') {
        i++;
      }
      name.push(member[i].toUpperCase());
    }
  }
  return name.sort().join('');
}

module.exports = {
  createDreamTeam
};
