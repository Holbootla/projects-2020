import { cards } from '../assets/data/cards.js';

const playSound = function (title) {
    if (title) {
        const audioSourceIndex = cards.flat().findIndex((element) => {
            return element.word === title.toString();
        });
        const audio = new Audio();
        audio.src = `assets/${cards.flat()[audioSourceIndex].audioSrc}`;
        audio.autoplay = true;
    }
};

const playSignal = function (answer) {
    const audio = new Audio();
        audio.src = `assets/audio/${answer}.mp3`;
        audio.autoplay = true;
}

export { playSound, playSignal };