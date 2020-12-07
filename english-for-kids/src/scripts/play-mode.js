import { startGame } from './game-process.js';

const mainContainer = document.querySelector('.main-container');

const turnOnPlayMode = function () {

    if (document.querySelector('.card-word')) {
        const rotateBtn = document.querySelectorAll('.card-word-flip-icon');
        const cardWordTitle = document.querySelectorAll('.card-word-title');

        rotateBtn.forEach(element => {
            element.classList.add('display-none');
        })
        cardWordTitle.forEach(element => {
            element.classList.add('z-index-1');
        })

        mainContainer.insertAdjacentHTML('beforeend', `
            <div class="start-game-button">
                Start game
            </div>
        `);
        
        startGame();
    }

};

const turnOffPlayMode = function () {

    if (document.querySelector('.card-word')) {
        
        const rotateBtn = document.querySelectorAll('.card-word-flip-icon');
        const cardWordTitle = document.querySelectorAll('.card-word-title');
        
        rotateBtn.forEach(element => {
            element.classList.remove('display-none');
        })
        cardWordTitle.forEach(element => {
            element.classList.remove('z-index-1');
        })

    }
    
    if (document.querySelector('.start-game-button')) {
        document.querySelector('.start-game-button').remove();
    }

};

export { turnOnPlayMode, turnOffPlayMode };