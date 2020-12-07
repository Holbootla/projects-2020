import { wrongAnswers } from './game-process.js';
import { playSignal } from './play-sound.js';
import { renderThemeCards } from './render-theme-cards.js';

const gameResult = function () {
    
    const whatResult = wrongAnswers === 0 ? 'Good' : 'Bad';
    const smile = wrongAnswers === 0 ? 'green-smile' : 'red-smile';
    const cardsContainer = document.querySelector('.cards-container');
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    cardsContainer.innerHTML = '';
    
    setTimeout(() => {
        whatResult === 'Good' ? playSignal('Success') : playSignal('Failure');
    }, 2000)

    cardsContainer.innerHTML = `
    <div class="white-back">
        <div class="result-container">
            <div class="result-title">${whatResult} job!</div>
            <div class="results">
            Your result: ${wrongAnswers} mistakes
            </div>
            <img class="smile" src="../src/assets/images/${smile}.svg">
        </div>
    </div>
    `;

    setTimeout(() => {
        renderThemeCards();
    }, 5000);

}

export { gameResult };