const numbers = document.querySelectorAll('[data-number]');
const operations = document.querySelectorAll('[data-operation');
const allClear = document.querySelector('[data-all-clear]');
const del = document.querySelector('[data-delete]');
const result = document.querySelector('[data-equals]');

const numberPress = () => {
    console.log('Клик по кнопке с номером');
};

const operationPress = () => {
    console.log('Клик по кнопке с операцией');
};

const acPress = () => {
    console.log('Клик по кнопке AC');
};

const delPress = () => {
    console.log('Клик по кнопке DEL');
};

const resultPress = () => {
    console.log('Клик по кнопке =');
};



for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', numberPress);
}

for (let i = 0; i < operations.length; i++) {
    let operation = operations[i];
    operation.addEventListener('click', operationPress);
}

allClear.addEventListener('click', acPress);

del.addEventListener('click', delPress);

result.addEventListener('click', resultPress);






