var memory = 0;

function calculatePercentage() {
var display = document.forms["cal"]["display"];
var currentValue = display.value;

  if (!isValidNumber(currentValue)) {
    display.value = "Invalid number";
    return;
  }

try {
  var result = eval(currentValue) / 100;
    if (isNaN(result)) {
      throw new Error("Invalid expression");
    }
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

function deleteLastCharacter() {
  var display = document.forms["cal"]["display"];
  var currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function addToMemory() {
  var display = document.forms["cal"]["display"];
  var currentValue = display.value;

  if (!isValidNumber(currentValue)) {
    display.value = "Invalid number";
    return;
  }

var value = parseFloat(currentValue);
  memory += value;
  display.value = "";
}

function subtractFromMemory() {
  var display = document.forms["cal"]["display"];
  var currentValue = display.value;

  if (!isValidNumber(currentValue)) {
    display.value = "Invalid number";
    return;
  }

var value = parseFloat(currentValue);
  memory -= value;
  display.value = "";
}

function recallMemory() {
  var display = document.forms["cal"]["display"];
  display.value = memory;
}

function isValidNumber(value) {
  var pattern = /^(\d+(\.\d+)?([+\-*\/]\d+(\.\d+)?)*|\d+(\.\d+)?[+\-*\/]+)$/;
  return pattern.test(value);
}
function disableRightClick(event) {
  event.preventDefault();
}
function preventDefault(event) {
  event.preventDefault();
}