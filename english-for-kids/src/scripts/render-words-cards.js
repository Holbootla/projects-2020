import { cards } from '../assets/data/cards.js';
import { playSound } from './play-sound.js';
import { turnOnPlayMode } from './play-mode.js';
import { turnOffPlayMode } from './play-mode.js';
import { PLAY_MODE } from './switcher-button.js';

const renderWordsCards = function (theme) {
    
    const cardsContainer = document.querySelector('.cards-container');

    const wordsBlock = cards[cards[0].indexOf(theme) + 1];

    cardsContainer.innerHTML = '';

    if (document.querySelector('.theme-title')) {
        document.querySelector('.theme-title').remove()};

    cardsContainer.insertAdjacentHTML('beforebegin', `<div class="theme-title">- ${theme} -</div>`);

    wordsBlock.forEach((element) => {
        cardsContainer.insertAdjacentHTML('beforeend', `
        <div class="card-word">
            <div class="card-word-inner">
                <div class="card-word-front" style="background: url(./../src/assets/${element.image})">
                    <div class="card-word-title">${element.word}</div>
                    <div class="card-word-flip-icon"></div>
                </div>
                <div class="card-word-back" style="background: url(./../src/assets/${element.image})">
                    <div class="card-word-title">${element.translation}</div>
                </div>
            </div>
        </div>
        `);
    });
        
    const cardWord = document.querySelectorAll('.card-word-front');

    cardWord.forEach(element => {
        element.addEventListener('click', () => {
            playSound(element.innerText);
        });
    });
    
    const rotateBtn = document.querySelectorAll('.card-word-flip-icon');

    rotateBtn.forEach(element => {
        element.addEventListener('click', () => {
            element.closest('.card-word-inner').classList.add('card-word-flip');
            
            element.closest('.card-word').addEventListener('mouseleave', () => {
                element.closest('.card-word-inner').classList.remove('card-word-flip');
            });
        });
    });

    const mainPageNavigationItem = document.querySelector('[data-main]');
    const currentNavigationItem = document.querySelector(`[data-${theme}]`);
    currentNavigationItem.classList.replace('navigation-item', 'navigation-item-current');
    mainPageNavigationItem.classList.replace('navigation-item-current', 'navigation-item');

    if (document.querySelector('.start-game-button')) {
        document.querySelector('.start-game-button').remove();
    }

    if (PLAY_MODE) {
        turnOnPlayMode();
    }
           
};

export { renderWordsCards };