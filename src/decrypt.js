// const { question } = require('readline-sync');

const { convertNumber } = require('./utils/convertNumber');

function decrypt(encrypted) {
  const encryptedArr = encrypted.split('');
  const decrypted = encryptedArr
    .map((strNumber) => Number(strNumber))
    .map((number) => convertNumber(number, '-'))
    .map((number) => String.fromCharCode(number))
    .join('');

  return decrypted;
}

const result = decrypt('4766696575504448494963424246495144');
console.log(result);
