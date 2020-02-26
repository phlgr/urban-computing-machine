"use strict";

//query elements
const calculatorOutput = document.querySelector(".calc__output");
calculatorOutput.value = "Ready to calculate!";

calculatorOutput.value = subtract(10, 15);

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
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
