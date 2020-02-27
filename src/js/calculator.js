"use strict";

//query elements
const calculatorOutput = document.querySelector(".calc__output");
const calculatorInputs = document.querySelectorAll(".calc__input");
const calculatorEquals = document.querySelector(".calc__equal");
const calculatorReset = document.querySelector(".calc__reset");
const calculatorAdd = document.querySelector(".calc__add");
const calculatorOperators = document.querySelectorAll(".calc__special");

let oldNumber = 0;
let newNumber = 0;
let operator = "";

calculatorOutput.value = "0";

function add(numberOne, numberTwo) {
  calculatorOutput.value = numberOne + numberTwo;
}
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function clear() {
  calculatorOutput.value = "0";
}

function clearAll() {
  clear();
  oldNumber = 0;
  newNumber = 0;
}

calculatorReset.addEventListener("click", clearAll);

calculatorInputs.forEach(addInputEventListener => {
  addInputEventListener.addEventListener("click", writeValueToOutput);
  function writeValueToOutput() {
    if (
      calculatorOutput.value === "0" ||
      calculatorOutput.value === "Ready to calculate!"
    ) {
      calculatorOutput.value = addInputEventListener.innerText;
    } else {
      calculatorOutput.value += addInputEventListener.innerText;
    }
  }
});

calculatorOperators.forEach(addOperatorEventListener => {
  addOperatorEventListener.addEventListener("click", () => {
    if (oldNumber == 0) {
      oldNumber = Number(calculatorOutput.value);
    } else {
      newNumber = Number(calculatorOutput.value);
    }
    operator = addOperatorEventListener.innerText;
    clear();
  });
});

calculatorEquals.addEventListener("click", () => {
  newNumber = Number(calculatorOutput.value);
  clear();
  switch (operator) {
    case "+":
      calculatorOutput.value = oldNumber + newNumber;
      break;
    case "-":
      calculatorOutput.value = oldNumber - newNumber;
      break;
    case "/":
      calculatorOutput.value = oldNumber / newNumber;
      break;
    case "*":
      calculatorOutput.value = oldNumber * newNumber;
      break;
  }

  oldNumber = Number(calculatorOutput.value);
  newNumber = 0;
});
