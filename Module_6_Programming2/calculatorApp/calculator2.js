// Creates 'calculator' object consisting of attributes needed to construct valid expressions.
const calculator = {
    displayValue: '0', // holds a string value that represents the input of the user or results. Keeps track of what should be displayed on screen.
    firstOperand: null, // stores the first operand for any expression. Set to 'null' at start.
    waitingForSecondOperand: false, // serves as a way to check if both the first operand and the operator have been inputted. 
    // If it's 'TRUE' the next numbers that the user enters will constistute the second operand.
    operator: null, // stores operator for an expression. Initial value is 'null'.
};
  
  
// Inputting Digits
// Need to make the digit buttons work so that when any of them is clicked the corresponding value is displayed on the screen.
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
    // Overwrite `displayValue` if the current value is '0' otherwise append to it
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    console.log(calculator);
    }

// Inputting Decimals
// When user clicks decimal point, append decimal poin to results displayed on screen except if already has one.
function inputDecimal(dot) {
    // If the 'displayValue' property does not contain a decimal point
    if (!calculator.displayValue.includes(dot)){
        // Append the decimal point
        calculator.displayValue += dot;
    }
}
  

  
// Handling Operators
// When user clicks an operator after entering the first operand, the operator property should be updated with whatever operator was clicked.
function handleOperator(nextOperator) {
    // De-structure the properties on the calculator object
    const { firstOperand, displayValue, operator } = calculator
    // `parseFloat` converts the string contents of `displayValue` to a floating-point number
    const inputValue = parseFloat(displayValue);

    // Verify that `firstOperand` is null and that the `inputValue` is not a `NaN` value
    if (firstOperand === null && !isNaN(inputValue)) {
        // Update the firstOperand property
        calculator.firstOperand = inputValue;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
    }

  
// Create a function to show the contents of the 'displayValue' property so that any time an operation is performed in the app
// it can be invoked to update the screen with the contents of 'displayValue'
function updateDisplay() {
// select the element with the class of 'calculator-screen'
const display = document.querySelector('.calculator-screen');
//  update the value of the element with the contents of 'displayValue'
display.value = calculator.displayValue;
}
  
updateDisplay();
  
  
  
// Handling key presses
// Write code that listens for click on the calculator keys and determine what type of key was clicked
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
// Access the clicked element
const { target } = event; // Can also be written as 'cost target = event.target;'

// Check if the clicked element is button.
// If not, exit from function
if (!target.matches('button')) {
    return;
}

if (target.classList.contains('operaor')) {
    handleOperator(target.value);
        updateDisplay();
    return;
}

if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
        updateDisplay();
    return;
}

if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
}

inputDigit(target.value);
updateDisplay();
}); // we’re listening for a click event on the element with a class of calculator-keys. 
// Since all the keys on the calculator are children of this element, the click event filters down to them too. This is known as event delegation.

  
  
 