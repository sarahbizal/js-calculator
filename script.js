let firstNumber = null;
let lastNumber = null;
let inputOperator = null;
let currentNumber = "";

const digitButtons = Array.from(document.getElementsByClassName("digitButton"));
const operatorButtons = Array.from(
  document.getElementsByClassName("operatorButton"),
);
const displayElement = document.getElementById("displayContainer");
const equalsButton = document.getElementById("equalsButton");
const clearButton = document.getElementById("clearButton");

function add(digitOne, digitTwo) {
  return digitOne + digitTwo;
}

function subtract(digitOne, digitTwo) {
  return digitOne - digitTwo;
}

function divide(digitOne, digitTwo) {
  return digitOne / digitTwo;
}

function multiply(digitOne, digitTwo) {
  return digitOne * digitTwo;
}

function applyOperatorType(inputOperator, inputDigitOne, inputDigitTwo) {
  const operatorFunctionBySymbol = {
    "+": add,
    "-": subtract,
    "/": divide,
    "*": multiply,
  };

  const operatorFunction = operatorFunctionBySymbol[inputOperator];
  if (operatorFunction === null || operatorFunction === undefined) {
    throw new Error("Invalid operator input");
  }
  return operatorFunction(inputDigitOne, inputDigitTwo);
}

digitButtons.forEach((digitButton) => {
  digitButton.addEventListener("click", () => {
    const digit = digitButton.dataset.digit; // what the user pressed
    currentNumber += digit; // we add to the current number here
    displayElement.innerText += digit; // we add to the display in parallel
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    inputOperator = operatorButton.dataset.operator;
    displayElement.innerText += inputOperator;
    firstNumber = parseFloat(currentNumber);
    currentNumber = "";
  });
});

equalsButton.addEventListener("click", () => {
  lastNumber = parseFloat(currentNumber);
  currentNumber = applyOperatorType(inputOperator, firstNumber, lastNumber);
  displayElement.innerText = currentNumber;
  lastNumber = null;
  inputOperator = null;
});

clearButton.addEventListener("click", () => {
  firstNumber = null;
  lastNumber = null;
  currentNumber = "";
  inputOperator = null;
  displayElement.innerText = "";
});
