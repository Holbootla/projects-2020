//Hamburger menu

const burgerMenu = document.querySelector('.top-nav');
const burgerIcon = document.querySelector('.burger-icon');
const logo = document.querySelector('.logo');
const darkBack = document.querySelector('.dark-back');
const activeLink = document.querySelector('.top-nav-list-item-link-active');

burgerIcon.addEventListener('click', showBurgerMenu);
darkBack.addEventListener('click', closeBurgerMenu);
activeLink.addEventListener('click', closeBurgerMenu);

function showBurgerMenu() {
    burgerMenu.classList.toggle('top-nav-translate');
    logo.classList.toggle('logo-translate');
    burgerIcon.classList.toggle('burger-icon-rotated');
    darkBack.classList.toggle('blackout');
    document.body.classList.toggle('overflow-hidden');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('top-nav-translate');
    logo.classList.remove('logo-translate');
    burgerIcon.classList.remove('burger-icon-rotated');
    darkBack.classList.remove('blackout');
    document.body.classList.remove('overflow-hidden');
}