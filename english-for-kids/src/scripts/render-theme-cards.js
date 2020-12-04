import { cards } from '../assets/data/cards.js';
import { renderWordsCards } from './render-words-cards.js';

const renderThemeCards = function () {
    
    const cardsContainer = document.querySelector('.cards-container');

    cardsContainer.innerHTML = '';

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
    
};

export { renderThemeCards };