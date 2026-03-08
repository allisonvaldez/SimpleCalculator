// Store the calulation history as an array
let calcHistory = [];

// Provide the functions for the calculator make sure perform error handling where necessary
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
        return "Cannot divide by zero!";
    } else {
        return a / b;
    }
}

// Function required to run
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let operation = prompt("Enter operation (add, subtract, multiply, divide):");
let result;

function execute(num1, num2, operation)

