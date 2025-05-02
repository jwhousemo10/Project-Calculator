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
  // input '1' and '2' is clicked. Once the operator is clicked, currentNumber is pushed to
  // numbers array, and the operator is pushed to the operators array.
  function calculateExpression() {
    let numbers = [];
    let operators = [];
    let currentNumber = '';

    // Loop goes through math expression, character by character, where 'i' is the
    // index-position, and 'expression.length' total number of characters. 
    // 'currChar' gets the character at the current index-position.
    // If the character is a number, it's added to currentNumber.
    // Ones the operator is clicked, currentNumber is pushed to numbers array, 
    // after being converted to a number using Number(). 
    // The operator is pushed to the operators array, and currentNumber is reset to ''.
    for (let i = 0; i < expression.length; i++) {
      const currChar = expression[i];
      if (currChar >= '0' && currChar <= '9') {
        currentNumber += currChar;
      } else {
        numbers.push(Number(currentNumber));
        operators.push(currChar);
        currentNumber = '';
      }
    }
    // The last number in the expression, e.g. '15+5', is pushed. 
    // When loop ends, '5' is still sitting in 'currentNumber' since no operator after it
    // to trigger push during loop. Last number is now pushed. 
    numbers.push(Number(currentNumber));
  }