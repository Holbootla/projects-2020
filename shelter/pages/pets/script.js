//Hamburger menu

const burgerMenu = document.querySelector('.top-nav');
const burgerIcon = document.querySelector('.burger-icon');
const logo = document.querySelector('.logo');
const darkBack = document.querySelector('.dark-back');
const header = document.querySelector('.header');
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
    header.classList.toggle('background-none');
}

function closeBurgerMenu() {
    burgerMenu.classList.remove('top-nav-translate');
    logo.classList.remove('logo-translate');
    burgerIcon.classList.remove('burger-icon-rotated');
    darkBack.classList.remove('blackout');
    document.body.classList.remove('overflow-hidden');
    header.classList.remove('background-none');
}


// constructing slides from JSON

const petsCardsContainer = document.querySelector('.pets-cards');
const petButton = document.querySelector('.pet-button');

async function getPets() {  
    const source = `../../assets/data/pets.json`;
    const res = await fetch(source);
    const data = await res.json();

    // shuffle of data array
    for (let i = data.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }

    for (i = 0; i < data.length; i++) {
        petsCardsContainer.insertAdjacentHTML('beforeend', `<div class="pet-card"><img src="${data[i].img}"><h4 class="pet-card-title">${data[i].name}</h4><div class="button-secondary pet-button" id="${data[i].name}">Learn more</div></div>`    )
    }
          
}

getPets();