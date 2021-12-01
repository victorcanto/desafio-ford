const { splitIntoPairs } = require('../../src/utils/splitIntoPairs');

const encryptedStr = '5178736979625660535367545458535556';
const expectedPairArray = [
  '51',
  '78',
  '73',
  '69',
  '79',
  '62',
  '56',
  '60',
  '53',
  '53',
  '67',
  '54',
  '54',
  '58',
  '53',
  '55',
  '56',
];

describe('A função splitIntoPairs', () => {
  it('recebe a string criptografada e devolve um array', () => {
    expect(splitIntoPairs(encryptedStr)).toEqual(expectedPairArray);
  });
  it('recebe a string criptografada e devolve um array de pares', () => {
    expect(Array.isArray(splitIntoPairs(encryptedStr))).toBe(true);
  });
});

// AVISO: Não considerar teste devido ao tempo de desafio excedido!!!
