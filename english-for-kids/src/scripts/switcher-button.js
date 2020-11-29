const switcherButton = function () {
    
    const gameModeButton = document.querySelector('.game-mode-button');
    const gameModeButtonSwitcher = document.querySelector('.game-mode-button-switcher');
    const gameModeButtonText = document.querySelector('.game-mode-button-text');

    gameModeButtonText.innerHTML = 'PLAY';
        
    gameModeButton.addEventListener('click', () => {
        gameModeButton.classList.toggle('game-mode-button-on');
        gameModeButtonSwitcher.classList.toggle('game-mode-button-switcher-on');
        gameModeButtonText.classList.toggle('game-mode-button-text-on');
        
        if (gameModeButtonText.innerHTML === 'PLAY') {
            gameModeButtonText.innerHTML = 'TRAIN';
        } else {
            gameModeButtonText.innerHTML = 'PLAY';
        }        
    });
    
};

export { switcherButton };