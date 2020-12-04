const toggleSwitcherButton = function () {

    const PLAY_MODE = 'PLAY';
    const TRAIN_MODE = 'TRAIN';
    
    const gameModeButton = document.querySelector('.game-mode-button');
    const gameModeButtonSwitcher = document.querySelector('.game-mode-button-switcher');
    const gameModeButtonText = document.querySelector('.game-mode-button-text');

    gameModeButtonText.innerHTML = PLAY_MODE;
        
    gameModeButton.addEventListener('click', () => {
        gameModeButton.classList.toggle('game-mode-button-on');
        gameModeButtonSwitcher.classList.toggle('game-mode-button-switcher-on');
        gameModeButtonText.classList.toggle('game-mode-button-text-on');
        gameModeButton.classList.contains('game-mode-button-on') ? gameModeButtonText.innerHTML = TRAIN_MODE : gameModeButtonText.innerHTML = PLAY_MODE;    
    });
    
};

export { toggleSwitcherButton };