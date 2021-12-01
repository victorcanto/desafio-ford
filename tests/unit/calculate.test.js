const { calculate } = require('../../src/utils/calculate');

describe('A função calculate recebe 3 argumentos: "(number, ruleNumber, operator)",', () => {
  it('se o operator for "+", a função devolve a soma de number + ruleNumber', () => {
    expect(calculate(1, 2, '+')).toBe(3);
  });
  it('se o operator for "-", a função devolve a subtração como valor absoluto de number - ruleNumber', () => {
    expect(calculate(2, 7, '-')).toBe(5);
  });
});

// AVISO: Não considerar teste devido ao tempo de desafio excedido!!!
