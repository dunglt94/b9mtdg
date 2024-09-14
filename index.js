let screen = document.getElementById("screen");

function getValue(value) {
    screen.value += value;
}
function calculate() {
    screen.value = eval(screen.value);
}
function reset() {
    screen.value = "";
}