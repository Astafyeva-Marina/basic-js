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
  constructor(direction = true) {
    this.direction = direction;
}

  encrypt(string, key) {
    if (key === undefined || string === undefined ) {
			throw Error("Incorrect arguments!");
		}

		let code = [];
    let result = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let charCode = key.split('');
		let str = string.toUpperCase();
    let iCode = 0;

		for (let i = 0; i < string.length; i++) {
			if (string[i] === ' ') {
				code.push(' ');
				charCode.unshift('!');
			} else {
				if (charCode[i] === undefined) {
					charCode = key.split('');
					string = string.slice(i);
					i = 0;
				}
				code.push(charCode[i].toUpperCase());
			}
		}
		for(let i = 0; i < str.length; i++) {
			if (alphabet.indexOf(str[i]) > -1) {
				if ((alphabet.indexOf(str[i]) + alphabet.indexOf(code[i])) > alphabet.length - 1) {
					iCode = Math.abs(alphabet.length - (alphabet.indexOf(str[i]) + alphabet.indexOf(code[i])));
				} else {
					iCode = alphabet.indexOf(str[i]) + alphabet.indexOf(code[i]);
				}
				result.push(alphabet[iCode]);
			} else {
				result.push(str[i]);
			}
		}
		if (this.direction === false) {
			return result.reverse().join('');
		} else return result.join('');
	}

  decrypt(string, key) {
    if (key === undefined || string === undefined ) {
			throw Error("Incorrect arguments!")
		}
		let code = [];
    let result = [];
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let charCode = key.split('');
		let str = string.toUpperCase();
    let iCode = 0;

		for (let i = 0; i < string.length; i++) {
			if (string[i] === ' ') {
				code.push(' ');
				charCode.unshift('!');
			} else {
				if (charCode[i] === undefined) {
					charCode = key.split('');
					string = string.slice(i);
					i = 0;
				}
				code.push(charCode[i].toUpperCase());
			}
		}
		for(let i = 0; i < str.length; i++) {
			if (alphabet.indexOf(str[i]) > -1) {
				if ((alphabet.indexOf(str[i]) < alphabet.indexOf(code[i]))) {
					iCode = Math.abs(alphabet.length + (alphabet.indexOf(str[i]) - alphabet.indexOf(code[i])));
				} else {
					iCode = alphabet.indexOf(str[i]) - alphabet.indexOf(code[i]);
				}
				result.push(alphabet[iCode]);
			} else {
				result.push(str[i]);
			}
		}
		if (this.direction === false) {
			return result.reverse().join('');
		} else return result.join('');
	}
}

module.exports = {
  VigenereCipheringMachine
};
