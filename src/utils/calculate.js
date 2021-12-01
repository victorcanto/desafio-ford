function calculate(number, ruleNumber, operator) {
  return operator === '+' ? number + ruleNumber : Math.abs(number - ruleNumber);
}

module.exports = { calculate };
