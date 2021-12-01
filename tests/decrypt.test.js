const { decrypt } = require('../src/decrypt');

const str = '5178736979625660535367545458535556';
const decrypted = '1HGCM82633A004352';

describe('A função decrypt', () => {
  it('quando passado uma string como argumento, retorna uma string', () => {
    expect(typeof decrypt(str)).toBe('string');
  });

  it('retorna o texto descriptografado correto', () => {
    expect(decrypt(str)).toBe(decrypted);
  });
});

// AVISO: Não considerar teste devido ao tempo de desafio excedido!!!
