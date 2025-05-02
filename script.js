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