const { calculate } = require('./calculate');
const { rule } = require('./rule');

function convertNumber(number, operator) {
  const isEven = number % 2 === 0;
  return isEven
    ? calculate(number, rule['even'], operator)
    : calculate(number, rule['odd'], operator);
}

module.exports = { convertNumber };
