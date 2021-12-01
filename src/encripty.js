const { question } = require('readline-sync');
const { convertNumber } = require('./utils/convertNumber');

function encripty(vinNumber) {
  const vinNumberArr = vinNumber.split('');
  const encrypted = vinNumberArr
    .map((str) => str.charCodeAt())
    .map((number) => convertNumber(number), '+')
    .join('');

  return encrypted;
}
const result = encripty('1HGCM82633A004352');
console.log(result);
