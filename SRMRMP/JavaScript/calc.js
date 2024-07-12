let operation = document.getElementById("screen");
function clearDisplay() {
  operation.value = "";
}
function addText(val) {
  operation.value += val;
}
function computation() {
  try {
    operation.value = eval(operation.value);
  } catch {
    operation.value = "Error";
  }
}
