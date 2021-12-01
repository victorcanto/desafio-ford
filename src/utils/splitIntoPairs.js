function splitIntoPairs(str) {
  const result = [];
  const len = str.length;
  let i = 0;
  while (i < len) {
    result.push(str.substring(i, i + 2));
    i += 2;
  }
  return result;
}

module.exports = { splitIntoPairs };

// AVISO: Não considerar devido ao tempo de desafio excedido!!!
