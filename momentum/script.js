const time = document.querySelector('.time');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

function showTime () {
    let today = new Date();
    let day = today.getDay();
    let date = today.getDate();
    let month = today.getMonth();
    let hours = today.getHours();
    let timeWatch = today.toLocaleTimeString();

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

    time.innerHTML = `Today is ${day}, ${month} ${date}th<br>${timeWatch}`;
    setTimeout(showTime, 1000);
}


showTime();