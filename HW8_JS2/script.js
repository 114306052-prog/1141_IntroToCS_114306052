function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let op = document.getElementById("operator").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Result = Invalid input";
        return;
    }

    let answer;

    if (op === "+") answer = add(num1, num2);
    else if (op === "-") answer = subtract(num1, num2);
    else if (op === "*") answer = multiply(num1, num2);
    else if (op === "/") answer = divide(num1, num2);

    if (typeof answer === "string") {
        document.getElementById("result").textContent = "Result = " + answer;
    } else {
        document.getElementById("result").textContent = "Result = " + answer.toFixed(2);
    }
}