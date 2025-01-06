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

  constructor(direct = true) {
    this.direct = direct;
    this.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
     if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    const messageArr = message.split('');
		const resultArr = [];
    let idx = 0;

    messageArr.forEach((letter) => {
      if (this.ALPHABET.includes(letter)) {
        const letIdxAlpha = this.ALPHABET.indexOf(key[idx++]);
        const newLetAlpha = `${this.ALPHABET.slice(letIdxAlpha)}${this.ALPHABET.slice(0, letIdxAlpha)}`;
        resultArr.push(newLetAlpha[this.ALPHABET.indexOf(letter)]);
      }
      else {
        resultArr.push(letter);
      }
    });

    return this.direct ? resultArr.join('') : resultArr .reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }

    message = message.toUpperCase();
    key = key.repeat(Math.ceil(message.length / key.length)).toUpperCase();

    const messageArr = message.split('');
    const resultArr = [];
    let idx = 0;

    messageArr.forEach((letter) => {
      if (this.ALPHABET.includes(letter)) {
        const letIdxAlpha = this.ALPHABET.indexOf(key[idx++]);
        const newLetAlpha = `${this.ALPHABET.slice(letIdxAlpha)}${this.ALPHABET.slice(0, letIdxAlpha)}`;
        resultArr.push(this.ALPHABET[newLetAlpha.indexOf(letter)]);
      } else {
        resultArr.push(letter);
      }
    });

    return this.direct ? resultArr.join('') : resultArr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
