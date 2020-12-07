import { cards } from '../assets/data/cards.js';
import { renderWordsCards } from './render-words-cards.js';

const renderThemeCards = function () {
    
    const cardsContainer = document.querySelector('.cards-container');
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = '';
    cardsContainer.innerHTML = '';

    if (document.querySelector('.theme-title')) {
        document.querySelector('.theme-title').remove()};

    cards[0].forEach((element) => {
        cardsContainer.insertAdjacentHTML('beforeend', `
        <div class="card-theme" style="background: url(../src/assets/images/${element}.jpg); background-size: cover;">
            <div class="card-theme-title">${element}</div>
        </div>
        `);
    });
    
    const cardTheme = document.querySelectorAll('.card-theme');

    cardTheme.forEach(element => {
        element.addEventListener('click', () => {
            renderWordsCards(element.innerText);
        })
    })

    if (document.querySelector('.start-game-button')) {
        document.querySelector('.start-game-button').remove();
    }
    
};

export { renderThemeCards };