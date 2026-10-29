const display = document.getElementById("display");

function addValue(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "0";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);

    if (display.value === "") {
        display.value = "0";
    }
}

function calculate() {
    try {
        const expression = display.value;

        if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        const answer = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(answer)) {
            display.value = "Error";
        } else {
            display.value = String(answer);
        }
    } catch (error) {
        display.value = "Error";
    }
}