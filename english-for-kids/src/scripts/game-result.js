import { wrongAnswers } from './game-process.js';
import { renderThemeCards } from './render-theme-cards.js';

const gameResult = function () {
    
    const whatResult = wrongAnswers === 0 ? 'Good' : 'Bad';
    const cardsContainer = document.querySelector('.cards-container');
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    cardsContainer.innerHTML = '';
    
    cardsContainer.innerHTML = `
    <div class="white-back">
        <div class="result-container">
            <div class="result-title">${whatResult} job!</div>
            <div class="results">
            Your result: ${wrongAnswers} mistakes
            </div>
        </div>
    </div>
    `;

    setTimeout(() => {
        renderThemeCards();
    }, 5000);

}

export { gameResult };