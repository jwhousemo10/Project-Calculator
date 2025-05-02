// User's input kept as a string - initial value an empty string. 
let expression = '';

// Stores a reference to the display window in a variable.
const display = document.getElementById('displayWindow');

// Function called whenever a button is clicked - both number and operator.
  // Adds value of button to expression string, and updates display window.
  // Note: The function is called in the HTML file's onclick attribute. 
  function addToExpression(value) {
    expression += value;
    updateDisplay(expression);
  }

  // Function called when C (clear) button is clicked.
  // Note: The function is called in the HTML file's onclick attribute.
  // As it expects no input, upDateDisplay is called with a default value of 0.
  function clearDisplay() {
    expression = '';
    updateDisplay('0');
  }

  // Function updates display with whatever is passed to it, 
  // i.e. function addToExpression(value) passes the value of the button clicked. 
  // In this case, 'updateDisplay(content)' looks like this: updateDisplay(expression).
  function updateDisplay(content) {
    displayWindow.textContent = content;
  }

  // Function called when equals button '=' is clicked.
  // Empty arrays for numbers and operators: As inputs are looped through, they're
  // pushed to the appropriate array.
  // currentNumber, a string that stores current number being built, e.g. '12' as 
  // input '1' and '2' is clicked. Onces the operator is clicked, currentNumber is pushed to
  // numbers array, and the operator is pushed to the operators array.
  function calculateExpression() {
    let numbers = [];
    let operators = [];
    let currentNumber = '';
  }