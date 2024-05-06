/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let equation = ''
/*------------------------ Cached Element References ------------------------*/
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equalButt = document.querySelector('.equals')
const clearButt = document.querySelector('.reset')
const display = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      append(event.target.innerText);
    display.innerText = equation
      // Future logic to capture the button's value goes here...
    });
  });

  operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      append(event.target.innerText);
    display.innerText = equation
      // Future logic to capture the button's value goes here...
    });
  });
  
  equalButt.addEventListener("click", evaluate)


  clearButt.addEventListener("click", clear)
/*-------------------------------- Functions --------------------------------*/
function append(input) {
    equation = equation + input
}

function evaluate() {
    if (display.innerText == "" ) {return}
    display.innerText = eval(display.innerText)
    equation = display.innerText
}

function clear() {
    display.innerText = ''  
    equation = '' 
}


//collab with Grace, Jo, Alfred
//assist Azalea, Santana