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
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the first number: ', (num1) => {
    readline.question('Enter operation (add, subtract, multiply, divide): ', (op) => {
        readline.question('Enter the second number: ', (num2) => {

            // Perform conversion as it is necessary to get the right data type
            let val1 = Number(num1);
            let val2 = Number(num2);
            let result;

            // Utilize if statements for conditional logic flow
            if (op === "add") {
                result = add(val1, val2);
            }
            else if (op === "subtract") {
                result = subtract(val1, val2);
            } else if (op === "multiply") {
                result = multiply(val1, val2);
            } else if (op === "divide") {
                result = divide(val1, val2);
            } else {
                result = "Please try another operation, this does not work";
            }

            // Update the calculation history with proper entries
            calcHistory.push(`${num1} ${op} ${num2} = ${result}`);

            // Display functionality
            console.log("\nCalculation: " + result);
            console.log("Calculation History: ", calcHistory);

            // Make sure to close readline!
            readline.close();
        });
    });
});