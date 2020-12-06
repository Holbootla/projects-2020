import { renderThemeCards } from './render-theme-cards.js';
import { toggleHamburgerMenu } from './hamburger-menu.js';
import { toggleSwitcherButton } from './switcher-button.js';

window.addEventListener("DOMContentLoaded", function () {
    renderThemeCards();
    toggleHamburgerMenu();
    toggleSwitcherButton();
});