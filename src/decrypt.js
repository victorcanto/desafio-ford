const { question } = require('readline-sync');
const { convertNumber } = require('./utils/convertNumber');
const { splitIntoPairs } = require('./utils/splitIntoPairs');

function decrypt(encrypted) {
  const encryptedArr = splitIntoPairs(encrypted);
  const decryptedArr = encryptedArr
    .map((strNumber) => Number(strNumber))
    .map((number) => convertNumber(number, '-'));

  const decrypted = String.fromCharCode(...decryptedArr);
  console.log(decrypted);
  return decrypted;
}

const encrypted = question('Digite o texto a ser descriptografado: ');
decrypt(encrypted);

module.exports = { decrypt };

// AVISO: Não considerar correções e atualizações devido ao tempo de desafio excedido!!!
