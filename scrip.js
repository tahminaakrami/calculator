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
            throw new Error("Invalid input");
        }

        const result = Function(
            '"use strict"; return (' + expression + ')'
        )();

        if (!Number.isFinite(result)) {
            throw new Error("Invalid result");
        }

        display.value = String(
            Math.round((result + Number.EPSILON) * 100000000) / 100000000
        );

    } catch (error) {

        display.value = "Error";

    }

}