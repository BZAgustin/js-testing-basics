/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
function isUpperCase(letter) {
  return letter > 64 && letter < 91;
}

function isLowerCase(letter) {
  return letter > 96 && letter < 123;
}

function shiftLetter(letter, factor) {
  if(isUpperCase(letter)) {
    if(letter + factor > 90) {
      const offset = (letter + factor) - 91;
      return 65 + offset;
    }
  }

  if(isLowerCase(letter)) {
    if(letter + factor > 122) {
      const offset = (letter + factor) - 123;
      return 97 + offset;
    }
  }
  
  if(!isUpperCase(letter) && !isLowerCase(letter)) {
    return letter;
  }  

  return letter + factor;
}

function caesarCipher(string, factor = 0) {
  const cipher = [];

  for(const letter in string.split('')) {
    cipher.push(string.charCodeAt(letter));
    cipher[letter] = String.fromCharCode(shiftLetter(cipher[letter], factor));
  }

  return cipher.join('');
}

caesarCipher('Colo...');

export default caesarCipher;