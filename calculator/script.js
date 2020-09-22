const numbers = document.querySelectorAll('[data-number]');
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
    console.log(`Клик по кнопке с номером ${symbol}`);
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
        } else {
            currentNumber = parseFloat(localOperationMemory);
        }
        display.value = currentNumber;
        pendingOperation = op;
    }
    console.log(`Клик по кнопке с операцией ${op}`);
};

const acPress = () => {
    display.value = '0';
    console.log('Клик по кнопке AC');
};

const delPress = () => {
    console.log('Клик по кнопке DEL');
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

allClear.addEventListener('click', acPress);

del.addEventListener('click', delPress);





