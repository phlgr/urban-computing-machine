"use strict";

//query elements
const calculatorOutput = document.querySelector(".calc__output");
const calculatorInputs = document.querySelectorAll(".calc__input");
const calculatorEquals = document.querySelector(".calc__equal");
const calculatorReset = document.querySelector(".calc__reset");

calculatorOutput.value = "Ready to calculate!";

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

const numberOne = calculatorInputs[1].innerText;
const numberTwo = calculatorInputs[2].innerText;

function clearOutput() {
  calculatorOutput.value = "0";
}

function handleClick() {
  calculatorOutput.value = subtract(numberOne, numberTwo);
}

calculatorEquals.addEventListener("click", handleClick);
calculatorReset.addEventListener("click", clearOutput);
