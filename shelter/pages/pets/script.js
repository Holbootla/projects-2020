const burgerMenu = document.querySelector('.top-nav');
const burgerIcon = document.querySelector('.burger-icon');
const logo = document.querySelector('.logo');
const darkBack = document.querySelector('.dark-back');
const header = document.querySelector('.header')

burgerIcon.addEventListener('click', showBurgerMenu);
darkBack.addEventListener('click', closeBurgerMenu);

function showBurgerMenu() {
    burgerMenu.classList.toggle('top-nav-translate');
    logo.classList.toggle('logo-translate');
    burgerIcon.classList.toggle('burger-icon-rotated');
    darkBack.classList.toggle('blackout');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('top-nav-translate');
    logo.classList.remove('logo-translate');
    burgerIcon.classList.remove('burger-icon-rotated');
    darkBack.classList.remove('blackout');
}