const { encrypt } = require('../src/encrypt');

const str = '1HGCM82633A004352';
const encrypted = '5178736979625660535367545458535556';

describe('A função encrypt', () => {
  it('quando passado uma string como argumento, retorna uma string', () => {
    expect(typeof encrypt(str)).toBe('string');
  });

  it('retorna o texto criptografado correto', () => {
    expect(encrypt(str)).toBe(encrypted);
  });
});

// AVISO: Não considerar teste devido ao tempo de desafio excedido!!!
