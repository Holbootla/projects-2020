import { turnOnPlayMode } from './play-mode.js';
import { turnOffPlayMode } from './play-mode.js';

let PLAY_MODE = false;

const toggleSwitcherButton = function () {

    const PLAY_TEXT = 'PLAY';
    const TRAIN_TEXT = 'TRAIN';
    
    const gameModeButton = document.querySelector('.game-mode-button');
    const gameModeButtonSwitcher = document.querySelector('.game-mode-button-switcher');
    const gameModeButtonText = document.querySelector('.game-mode-button-text');

    gameModeButtonText.innerHTML = PLAY_TEXT;
        
    gameModeButton.addEventListener('click', () => {
        gameModeButton.classList.toggle('game-mode-button-on');
        gameModeButtonSwitcher.classList.toggle('game-mode-button-switcher-on');
        gameModeButtonText.classList.toggle('game-mode-button-text-on');
        if (gameModeButton.classList.contains('game-mode-button-on')) {
            gameModeButtonText.innerHTML = TRAIN_TEXT;
            PLAY_MODE = true;
            turnOnPlayMode();
        } else {
            gameModeButtonText.innerHTML = PLAY_TEXT;
            PLAY_MODE = false;
            turnOffPlayMode();
        };
    });
    
};

export { toggleSwitcherButton, PLAY_MODE };