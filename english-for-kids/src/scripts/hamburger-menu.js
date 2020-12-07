import { cards } from './../assets/data/cards.js';
import { renderWordsCards } from './render-words-cards.js';
import { renderThemeCards } from './render-theme-cards.js';

const toggleHamburgerMenu = function () {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
    const blackout = document.querySelector('.blackout');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    hamburgerMenuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu-opened');
    hamburgerMenuButton.classList.toggle('hamburger-menu-button-close');
    blackout.classList.toggle('blackout-on');
    document.body.classList.toggle('no-scroll');
    });

    const closeHamburgerMenu = function () {
        hamburgerMenu.classList.remove('hamburger-menu-opened');
        hamburgerMenuButton.classList.remove('hamburger-menu-button-close');
        blackout.classList.remove('blackout-on');
        document.body.classList.remove('no-scroll');
    };

    blackout.addEventListener('click', () => {
        closeHamburgerMenu();
    })

    const navigationList = document.querySelector('.navigation-list');
    
    navigationList.insertAdjacentHTML('beforeend', `
    <li class="navigation-item-current" data-main>Main page</li>
    `);

    cards[0].forEach((element) => {
        navigationList.insertAdjacentHTML('beforeend', `
        <li class="navigation-item" data-${element}>${element}</li>
        `);
    })   

    const cardThemeNavigationItem = document.querySelectorAll('.navigation-item');    

    cardThemeNavigationItem.forEach(element => {
        element.addEventListener('click', () => {
            const currentNavigationItem = document.querySelector('.navigation-item-current');
            renderWordsCards(element.innerText);
            currentNavigationItem.classList.replace('navigation-item-current', 'navigation-item');
            element.classList.replace('navigation-item', 'navigation-item-current');
            closeHamburgerMenu();
        })
    })

    const mainPageNavigationItem = document.querySelector('[data-main]');

    mainPageNavigationItem.addEventListener('click', () => {
        renderThemeCards();
        document.querySelector('.navigation-item-current').classList.replace('navigation-item-current', 'navigation-item');
        mainPageNavigationItem.classList.replace('navigation-item', 'navigation-item-current');
        
        closeHamburgerMenu();
    })

};

export { toggleHamburgerMenu };