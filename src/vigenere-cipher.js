const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(directType = true) {
    this.directType = directType;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.constructTable();
    this.constructHash();
  }

  encrypt(message, key) {
    this.checkInput(message, key);
    let encryptedMessage = [];
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      let messageChar = message[i];
      if (this.alphabet.includes(messageChar.toUpperCase())) {
        const keyChar = key[j++ % key.length].toUpperCase();
        const rowInd = this.hash.get(`${keyChar}_row`);
        const colInd = this.hash.get(`${messageChar.toUpperCase()}_col`);
        encryptedMessage.push(this.table[rowInd][colInd]);
      } else {
        encryptedMessage.push(message[i]);
      }
    }
    if (!this.directType) {
      encryptedMessage.reverse();
    }
    return encryptedMessage.join('');
  }

  decrypt(encryptedMessage, key) {
    this.checkInput(encryptedMessage, key);
    let decryptedMessage = [];
    let j = 0;
    for (let i = 0; i < encryptedMessage.length; i++) {
      let messageChar = encryptedMessage[i];
      if (this.alphabet.includes(messageChar.toUpperCase())) {
        const keyChar = key[j++ % key.length].toUpperCase();
        const rowInd = this.hash.get(`${keyChar}_row`);
        const colInd = this.table[rowInd].lastIndexOf(messageChar.toUpperCase());
        decryptedMessage.push(this.table[0][colInd]);
      } else {
        decryptedMessage.push(encryptedMessage[i]);
      }
    }
    if (!this.directType) {
      decryptedMessage.reverse();
    }
    return decryptedMessage.join('');
  }

  checkInput(...args) {
    for (let arg of args) {
      if (arg === undefined) {
        throw new Error('Incorrect arguments!');
      }
    }
  }

  constructTable() {
    this.table = [];
    for (let rowInd = 0; rowInd <= this.alphabet.length; rowInd++) {
      if (rowInd === 0) {
        this.table.push([0]);
      } else {
        this.table.push([this.alphabet[rowInd - 1]]);
      }
      for (let colInd = 0; colInd < this.alphabet.length; colInd++) {
        if (rowInd === 0) {
          this.table[rowInd].push(this.alphabet[(colInd)]);
        } else {
          this.table[rowInd].push(this.alphabet[(colInd + rowInd - 1) % this.alphabet.length]);
        }
      }
    }
  }

  constructHash() {
    this.hash = new Map();
    for (let i = 0; i < this.table[0].length; i++) {
      this.hash.set(`${this.table[0][i]}_col`, i);
    }
    for (let i = 0; i < this.table[0].length; i++) {
      this.hash.set(`${this.table[i][0]}_row`, i);
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
