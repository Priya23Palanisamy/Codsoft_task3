// script.js
let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Evaluate expression
    let result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}
