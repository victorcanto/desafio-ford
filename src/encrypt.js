const { question } = require('readline-sync');
const { convertNumber } = require('./utils/convertNumber');

function encrypt(vinNumber) {
  const vinNumberArr = vinNumber.split('');
  const encrypted = vinNumberArr
    .map((str) => str.charCodeAt())
    .map((number) => convertNumber(number, '+')) // AVISO: Não considerar está correção de sintaxe devido ao tempo de desafio excedido!!!
    .join('');

  console.log(encrypted);
  return encrypted;
}

const vinNumber = question('Digite o texto a ser criptografado: ');
encrypt(vinNumber);

module.exports = { encrypt };

// AVISO: Não considerar correções e atualizações devido ao tempo de desafio excedido!!!
