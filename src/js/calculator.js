"use strict";
import { add, subtract, multiply, divide } from "./math.js";

//query elements
const calculatorOutput = document.querySelector(".calc__output");
const calculatorInputs = document.querySelectorAll(".calc__input");
const calculatorEquals = document.querySelector(".calc__equal");
const calculatorReset = document.querySelector(".calc__reset");
const calculatorAdd = document.querySelector(".calc__add");
const calculatorOperators = document.querySelectorAll(".calc__special");

let numberOne = 0;
let numberTwo = 0;
let operator = "";

calculatorOutput.value = "Ready to calculate!";

function clear() {
  calculatorOutput.value = "0";
}

function clearAll() {
  clear();
  numberOne = 0;
  numberTwo = 0;
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
    if (numberOne == 0) {
      numberOne = Number(calculatorOutput.value);
    } else {
      numberTwo = Number(calculatorOutput.value);
    }
    operator = addOperatorEventListener.innerText;
    clear();
  });
});

calculatorEquals.addEventListener("click", () => {
  numberTwo = Number(calculatorOutput.value);
  clear();
  switch (operator) {
    case "+":
      calculatorOutput.value = add(numberOne, numberTwo);
      break;
    case "-":
      calculatorOutput.value = subtract(numberOne, numberTwo);
      break;
    case "/":
      calculatorOutput.value = divide(numberOne, numberTwo);
      break;
    case "*":
      calculatorOutput.value = multiply(numberOne, numberTwo);
      break;
  }

  numberOne = Number(calculatorOutput.value);
  numberTwo = 0;
});
