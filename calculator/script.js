const numbers = document.querySelectorAll('[data-number]');
const decimal = document.querySelector('[data-decimal]');
const operations = document.querySelectorAll('[data-operation');
const allClear = document.querySelector('[data-all-clear]');
const del = document.querySelector('[data-delete]');
const result = document.querySelector('[data-equals]');

let display = document.getElementById('display');
let currentNumber = 0;
let newNumber = false;
let pendingOperation = '';

const numberPress = (symbol) => {
    if (newNumber) {
        display.value = symbol;
        newNumber = false;
    } else {
        if (display.value === '0') {
            display.value = symbol;
        } else {
            display.value += symbol;
        }
    }
};

const operationPress = (op) => {
    let localOperationMemory = display.value;

    if (newNumber === true && pendingOperation != '=') {
        display.value = currentNumber;
    } else {
        newNumber = true;
        if (pendingOperation === '+') {
            currentNumber += parseFloat(localOperationMemory);
        } else if (pendingOperation === '-') {
            currentNumber -= parseFloat(localOperationMemory);
        } else if (pendingOperation === '*') {
            currentNumber *= parseFloat(localOperationMemory);
        } else if (pendingOperation === '/') {
            currentNumber /= parseFloat(localOperationMemory);
        } else if (pendingOperation === '^') {
            currentNumber = Math.pow(currentNumber, parseFloat(localOperationMemory));
        } else if (pendingOperation === '√') {
            currentNumber = Math.pow(currentNumber, 1 / parseFloat(localOperationMemory));
        } else {
            currentNumber = parseFloat(localOperationMemory);
        }
        display.value = currentNumber;
        pendingOperation = op;
    }
};

const acPress = () => {
    display.value = '0';
    newNumber = true;
    currentNumber = 0;
    pendingOperation = '';
};

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContent);
    });
}

for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];
    operation.addEventListener('click', function(e) {
        operationPress(e.target.textContent);
    });
   
}

const decimalPress = () => {
    let localDecimalMemory = display.value;
    if (newNumber) {
        localDecimalMemory = '0.';
        newNumber = false;
    } else {
        if (localDecimalMemory.indexOf('.') === -1) {
            localDecimalMemory += '.';
        }
    }
    display.value = localDecimalMemory;
};

allClear.addEventListener('click', acPress);

decimal.addEventListener('click', decimalPress);





