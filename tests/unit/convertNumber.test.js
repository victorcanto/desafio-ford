const { convertNumber } = require('../../src/utils/convertNumber');

describe('A função convertNumber recebe 2 argumentos: "(number, operator)",', () => {
  describe('se o operator for "+"', () => {
    it('o number foi ímpar a função devolve a soma de number + 2', () => {
      expect(convertNumber(51, '+')).toBe(53);
    });
    it('o number foi par a função devolve a soma de number + 6', () => {
      expect(convertNumber(52, '+')).toBe(58);
    });
  });

  describe('se o operator for "-"', () => {
    it('o number foi ímpar a função devolve a subtração como valor absoluto de number - 2', () => {
      expect(convertNumber(51, '-')).toBe(49);
    });
    it('o number foi par a função devolve a subtração como valor absoluto de number - 6', () => {
      expect(convertNumber(52, '-')).toBe(46);
    });
  });
});

// AVISO: Não considerar teste devido ao tempo de desafio excedido!!!
