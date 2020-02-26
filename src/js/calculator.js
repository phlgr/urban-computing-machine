"use strict";

//query elements
const calculatorOutput = document.querySelector(".calc__output");
const calculatorInputs = document.querySelectorAll(".calc__input");
const calculatorEquals = document.querySelector(".calc__equal");
const calculatorReset = document.querySelector(".calc__reset");
const calculatorAdd = document.querySelector(".calc__add");

calculatorOutput.value = "Ready to calculate!";

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

calculatorReset.addEventListener("click", clear);

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
