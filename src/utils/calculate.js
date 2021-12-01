function calculate(number, ruleNumber, operator) {
  return operator === '+'
    ? Number(number) + Number(ruleNumber)
    : Number(number) - Number(ruleNumber);
}

module.exports = { calculate };
