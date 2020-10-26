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


// Dynamic pets

async function getPets() {  
    const petsCardsContainer = document.querySelector('.pets-cards');
    const source = `../../assets/data/pets.json`;
    const res = await fetch(source);
    const data = await res.json();

    // shuffle of data array
    for (let i = data.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
      }

    data.forEach((el) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petCard.innerHTML = `
            <img src="${el.img}" alt=${el.name}>
            <h4 class="pet-card-title">${el.name}</h4>
            <div class="button-secondary pet-button"">Learn more</div>`;
        
        petsCardsContainer.append(petCard);

        petCard.addEventListener("click", () => {
            showPopup(el);
            });
        });      
}

getPets();


// popups

function showPopup(el) {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="popup-wrapper">
        <div class="popup-dark-back"></div>
        <div class="popup">
            <div class="close-popup"><img src="../../assets/icons/icon-close.svg"></div>
            <div class="popup-img-wrapper"><img class="popup-img" src="${el.img}"></div>
            <div class="popup-content">
                <h3 class="popup-title">${el.name}</h3>
                <h4 class="popup-subtitle">${el.type} - ${el.breed}</h4>
                <h5 class="popup-description">${el.description}</h5>
                <ul class="popup-list">
                    <li class="popup-list-item"><b>Age:</b> ${el.age}</li>
                    <li class="popup-list-item"><b>Inoculations:</b> ${el.inoculations}</li>
                    <li class="popup-list-item"><b>Diseases:</b> ${el.diseases}</li>
                    <li class="popup-list-item"><b>Parasites:</b> ${el.parasites}</li>
                </ul>
            </div>
        </div>
    </div>
    `);
    const popupDarkBack = document.querySelector('.popup-dark-back');
    popupDarkBack.classList.add('popup-blackout');
    document.body.classList.add('overflow-hidden');

    const closePopupButton = document.querySelector('.close-popup');
    closePopupButton.addEventListener('click', closePopup);
    popupDarkBack.addEventListener('mouseover', () => {
        closePopupButton.classList.add('close-popup-hover');
    });
    popupDarkBack.addEventListener('mouseout', () => {
        closePopupButton.classList.remove('close-popup-hover');
    });
    popupDarkBack.addEventListener('click', closePopup);
}


function closePopup () {
    const popup = document.querySelector('.popup-wrapper');
    document.body.removeChild(popup);
    document.body.classList.remove('overflow-hidden');
}