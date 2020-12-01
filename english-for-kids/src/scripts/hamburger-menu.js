import { cards } from './../assets/data/cards.js';

const toggleHamburgerMenu = function () {
    const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
    const hamburgerMenuButtonLine1 = document.querySelector('.hamburger-menu-button-line-1');
    const hamburgerMenuButtonLine2 = document.querySelector('.hamburger-menu-button-line-2');
    const hamburgerMenuButtonLine3 = document.querySelector('.hamburger-menu-button-line-3');
    const blackout = document.querySelector('.blackout');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    hamburgerMenuButton.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger-menu-opened');
    hamburgerMenuButton.classList.toggle('hamburger-menu-button-close');
    hamburgerMenuButtonLine1.classList.toggle('hamburger-menu-button-line-1-close');
    hamburgerMenuButtonLine2.classList.toggle('hamburger-menu-button-line-2-close');
    hamburgerMenuButtonLine3.classList.toggle('hamburger-menu-button-line-3-close');
    blackout.classList.toggle('blackout-on');
    document.body.classList.toggle('no-scroll');
    });

    blackout.addEventListener('click', () => {
    hamburgerMenu.classList.remove('hamburger-menu-opened');
    hamburgerMenuButton.classList.remove('hamburger-menu-button-close');
    hamburgerMenuButtonLine1.classList.remove('hamburger-menu-button-line-1-close');
    hamburgerMenuButtonLine2.classList.remove('hamburger-menu-button-line-2-close');
    hamburgerMenuButtonLine3.classList.remove('hamburger-menu-button-line-3-close');
    blackout.classList.remove('blackout-on');
    document.body.classList.remove('no-scroll');
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
};

export { toggleHamburgerMenu };