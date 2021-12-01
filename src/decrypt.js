const { convertNumber } = require('./utils/convertNumber');
const { splitIntoPairs } = require('./utils/splitIntoPairs');

function decrypt(encrypted) {
  const encryptedArr = splitIntoPairs(encrypted);
  const decryptedArr = encryptedArr
    .map((strNumber) => Number(strNumber))
    .map((number) => convertNumber(number, '-'));

  const decrypted = String.fromCharCode(...decryptedArr);
  return decrypted;
}

const result = decrypt('5178736979625660535367545458535556');
console.log(result);

// AVISO: Não considerar correções devido ao tempo de desafio excedido!!!
