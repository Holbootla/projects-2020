import { playSound } from './play-sound.js';
import { playSignal } from './play-sound.js';
import { gameResult } from './game-result.js';

let trueAnswers = 0;
let wrongAnswers = 0;
let numberOfWords;
let successStars = [];
const MAX_STARS = 8;
const starsContainer = document.querySelector('.stars');

const gameProcess = function () {
    
    trueAnswers = 0;
    wrongAnswers = 0;
    successStars = [];
    starsContainer.innerHTML = '';

    const wordCards = document.querySelectorAll('.card-word-front');
    const cardTitles = [];
    
    wordCards.forEach(element => {
        cardTitles.push(element.innerText);
    })

    numberOfWords = cardTitles.length;
    
    cardTitles.sort(() => Math.random() - 0.5);
    
    let countOfTitles = 0;

    function playCardSound () {

        playSound(cardTitles[countOfTitles]);

        wordCards.forEach(element => {
            const answerHandler = () => {
                if (element.innerText.toString() == cardTitles[countOfTitles].toString()) {
                    playSignal('correct');
                    if (successStars.length < MAX_STARS) {
                        successStars.push('&#9733');
                    } else {
                        successStars.shift();
                        successStars.push('&#9733');
                    }
                    starsContainer.innerHTML = `${successStars.join('')}`;
                    element.style.opacity = '0.5';
                    element.removeEventListener('click', answerHandler);
                    trueAnswers += 1;
                    countOfTitles += 1;
                    countOfTitles < cardTitles.length ? setTimeout(playSound, 1000, cardTitles[countOfTitles]) : gameResult();
                } else {
                    playSignal('error');
                    if (successStars.length < MAX_STARS) {
                        successStars.push('&#9734');
                    } else {
                        successStars.shift();
                        successStars.push('&#9734');
                    }
                    starsContainer.innerHTML = `${successStars.join('')}`;
                    wrongAnswers += 1;
                    setTimeout(playSound, 1000, cardTitles[countOfTitles]);
                }
            }
            element.addEventListener('click', answerHandler);

            const switcherGame = document.querySelector('.game-mode-button');
            switcherGame.addEventListener('click', () => {
                element.removeEventListener('click', answerHandler);
                element.style.opacity = '1';
                starsContainer.innerHTML = '';
                trueAnswers = 0;
                wrongAnswers = 0;
                numberOfWords = 0;
                successStars = [];
            })

        });

        const startGameBtn = document.querySelector('.start-game-button');

        startGameBtn.addEventListener('click', () => {
            playSound(cardTitles[countOfTitles]);
        }, {once: true});

    }

    playCardSound();

}

const startGame = function () {

    const startGameBtn = document.querySelector('.start-game-button');

    if (startGameBtn) {
        startGameBtn.addEventListener('click', () => {

            startGameBtn.classList.add('repeat-button');
            startGameBtn.innerText = 'Repeat';
            gameProcess();

            const modeSwitcher = document.querySelector('.game-mode-button');

        }, {once: true});
    }    

}

export { startGame, wrongAnswers, successStars, starsContainer };