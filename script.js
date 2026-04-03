let inputDigitOne = 0;
let inputDigitTwo = 0;
let inputOperator = "";

function add(digitOne, digitTwo) {
  return digitOne + digitTwo;
}

function subtract(digitOne, digitTwo) {
  return digitOne - digitTwo;
}
function divide(digitOne, digitTwo) {
  return digitOne % digitTwo;
}
function multiply(digitOne, digitTwo) {
  return digitOne * digitTwo;
}

function getOperatorType(inputOperator, inputDigitOne, inputDigitTwo) {
  if (inputOperator === "+") {
    return add(inputDigitOne, inputDigitTwo);
  } else if (inputOperator === "-") {
    return subtract(inputDigitOne, inputDigitTwo);
  } else if (inputOperator === "%") {
    return divide(inputDigitOne, inputDigitTwo);
  } else if (inputOperator === "*") {
    return multiply(inputDigitOne, inputDigitTwo);
  } else {
    return prompt("Invalid operator");
  }
}

console.log(getOperatorType("*", 1, 3));
