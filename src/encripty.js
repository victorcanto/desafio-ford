const { convertNumber } = require('./utils/convertNumber');

function encripty(vinNumber) {
  const vinNumberArr = vinNumber.split('');
  const encrypted = vinNumberArr
    .map((str) => str.charCodeAt())
    .map((number) => convertNumber(number, '+')) // AVISO: Não considerar está correção de sintaxe devido ao tempo de desafio excedido!!!
    .join('');

  return encrypted;
}
const result = encripty('1HGCM82633A004352');
console.log(result);
