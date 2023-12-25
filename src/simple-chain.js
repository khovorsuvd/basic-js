const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || parseFloat(position) !== position ||
        position - 1 < 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain = this.chain.filter((value) => value !== this.chain[position - 1]);
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  }
};

console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());

module.exports = {
  chainMaker
};
