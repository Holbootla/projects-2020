import { cards } from '../assets/data/cards.js';

const playSound = function (title) {
    const audioSourceIndex = cards.flat().findIndex((element) => {
        return element.word === title.toString();
    });
    const audio = new Audio();
    audio.src = `assets/${cards.flat()[audioSourceIndex].audioSrc}`;
    audio.autoplay = true;
};

export { playSound };