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

function applyOperatorType(inputOperator, inputDigitOne, inputDigitTwo) {
  const operatorFunctionBySymbol = {
    "+": add,
    "-": subtract,
    "%": divide,
    "*": multiply,
  };

  const operatorFunction = operatorFunctionBySymbol[inputOperator];
  return operatorFunction(inputDigitOne, inputDigitTwo);
}

console.log(applyOperatorType("?", 4, 3));
