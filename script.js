const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.getElementById('display')
    display.innerHTML = calculator.displayValue;
}


const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            calculator.displayValue = button.id;
            //display.innerHTML = calculator.displayValue;
            
            
        })
    });
 



function add(a, b) {
 console.log(a + b);
};

function subtract(a, b) {
    console.log(a - b);
};

function multiply(a, b) {
    console.log(a * b);
};

function divide(a, b) {
    console.log(a / b);
};

function operate(a, b, c) {
    if(a === "+") {
        add(b, c)
    } else if (a === "-") {
        subtract(b, c)
    } else if (a === "x") {
        multiply(b, c) 
    } else if (a === "÷") {
        divide(b, c)
    }
};