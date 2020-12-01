import { cards } from './../assets/data/cards.js';

const renderThemeCards = function () {
    
    const cardsContainer = document.querySelector('.cards-container');
    cards[0].forEach((element) => {
        cardsContainer.insertAdjacentHTML('beforeend', `
        <div class="card-theme" style="background: url(./../src/assets/images/${element}.jpg); background-size: cover;">
            <div class="card-theme-title">${element}</div>
        </div>
        `);
    })   
    
};

export { renderThemeCards };