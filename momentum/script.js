const datefull = document.querySelector('.datefull');
const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const btnChangeBG = document.querySelector('.btn-change-bg');

let imgRandomArray = [];

function createImgRandomArray () {

    let imagePath;

    function getImgRandom () {
        let imgName = Math.floor(Math.random() * 20) + 1;
        if (imgName >= 10) {
            imagePath = `${imgName}.jpg`;
        } else {
            imagePath = `0${imgName}.jpg`;
        }
    }

    const basePath = 'assets/images/';
    for (let i = 0; i < 24; i++) {
        if (i < 6) {
            getImgRandom();
            if (!imgRandomArray.includes(basePath + 'night/' + imagePath)) {
                imgRandomArray[i] = basePath + 'night/' + imagePath;
            } else {
                i--;
            }             
        } else if (i < 12) {
            getImgRandom();
            if (!imgRandomArray.includes(basePath + 'morning/' + imagePath)) {
                imgRandomArray[i] = basePath + 'morning/' + imagePath;
            } else {
                i--;
            } 
        } else if (i < 18) {
            getImgRandom();
            if (!imgRandomArray.includes(basePath + 'day/' + imagePath)) {
                imgRandomArray[i] = basePath + 'day/' + imagePath;
            } else {
                i--;
            } 
        } else if (i < 24) {
            getImgRandom();
            if (!imgRandomArray.includes(basePath + 'evening/' + imagePath)) {
                imgRandomArray[i] = basePath + 'evening/' + imagePath;
            } else {
                i--;
            } 
        } 
    }
}

function setBackground () {
    let today = new Date();
    let hours = today.getHours();
    let src = imgRandomArray[hours];
    const img = document.createElement("img");
    img.src = src;

    if (hours < 6) {
        img.onload = () => {document.body.style.backgroundImage = `url("${src}")`;}
        greeting.textContent = 'Good Night';
    } else if (hours < 12) {
        img.onload = () => {document.body.style.backgroundImage = `url("${src}")`;}
        greeting.textContent = 'Good Morning';
    } else if (hours < 18) {
        img.onload = () => {document.body.style.backgroundImage = `url("${src}")`;}
        greeting.textContent = 'Good Afternoon';
    } else if (hours < 24) {
        img.onload = () => {document.body.style.backgroundImage = `url("${src}")`;}
        greeting.textContent = 'Good Evening';
    }
}

let pseudoHours = 1;

function changeBG () {
    let today = new Date();
    let hours = today.getHours();
    
    if (hours + pseudoHours < 24) {
        let src = imgRandomArray[hours + pseudoHours];
        const img = document.createElement("img");
        img.src = src;
        img.onload = () => {document.body.style.backgroundImage = `url("${src}")`;}        
    } else {
        let src = imgRandomArray[pseudoHours];
        const img = document.createElement("img");
        img.src = src;
        img.onload = () => {document.body.style.backgroundImage = `url("${src}")`;}        
    }
    pseudoHours += 1;

    if (pseudoHours > 23) {
        pseudoHours = 1;
    }    
    btnChangeBG.disabled = true;
    setTimeout(function() {btnChangeBG.disabled = false}, 1500);
}

function showTime () {
    let today = new Date();
    let day = today.getDay();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.getDate();
    let month = today.getMonth();

    switch (day) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;   
        default:
            break;
    }

    switch (month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'February';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;  
        case 7:
            month = 'August';
            break; 
        case 8:
            month = 'September';
            break; 
        case 9:
            month = 'October';
            break; 
        case 10:
            month = 'November';
            break;  
        case 11:
            month = 'December';
            break; 
        default:
            break;  
    }

    datefull.innerHTML = `Today is ${day}, ${month} ${date}`;
    time.innerHTML = today.toLocaleTimeString();

    if (min === 0 && sec === 0) {
        setBackground();
    }

    setTimeout(showTime, 1000);
}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

let tempName = '';


function clearName () {
    tempName = name.textContent;
    name.textContent = '';
    localStorage.setItem('name', null);
}

function setName (e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
    
    if (localStorage.getItem('name') === '') {
        name.textContent = tempName;
        localStorage.setItem('name', tempName);
    }
}

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

let tempFocus = '';

function clearFocus () {
    tempFocus = focus.textContent;
    focus.textContent = '';
    localStorage.setItem('focus', null);
}

function setFocus (e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
    
    if (localStorage.getItem('focus') === '') {
        localStorage.setItem('focus', tempFocus);
        focus.textContent = tempFocus;
    }
}

createImgRandomArray();
showTime();
setBackground(); 
getName();
getFocus();

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', clearName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', clearFocus);
btnChangeBG.addEventListener('click', changeBG);

// Quotes
const blockquote = document.querySelector('blockquote');
const quoteBtn = document.querySelector('.quote-btn');

async function getQuote() {  
    const url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
    const res = await fetch(url);
    const data = await res.json();
    blockquote.textContent = data.quote.quoteText;
    }

document.addEventListener('DOMContentLoaded', getQuote);
quoteBtn.addEventListener('click', getQuote);


// weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const city = document.querySelector('.city');

function getCity() {
    if (localStorage.getItem('city') === null) {
        city.textContent = 'Minsk';
    } else {
        city.textContent = localStorage.getItem('city');
    }
}

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=660afb2acdc97991630ac8d197009df2&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
   
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    windSpeed.textContent = `Wind speed: ${data.wind.speed}m/s`
}

function clearCity () {
    tempCity = city.textContent;
    city.textContent = '';
    localStorage.setItem('city', null);
}

function setCity (e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('city', e.target.innerText);
            city.blur();
        }
    } else {
        localStorage.setItem('city', e.target.innerText);
    }
    
    if (localStorage.getItem('city') === '') {
        city.textContent = tempCity;
        localStorage.setItem('city', tempCity);
    }
    getWeather();
}

getCity();
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('click', clearCity);
city.addEventListener('blur', setCity);

