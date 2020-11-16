/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import '../styles/style.css';
import '../assets/favicon/favicon.ico';
import '../assets/audio/turn.mp3';

const Game = {

    elements: {
        boardSize: 16,
        gemSize: 25,
        gems: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        gem: null,
        currentGems: null,
        emptyGem: null,
        turns: null,
        time: null,
        currentTime: null,
        currentTimeMinutes: null,
        currentTurns: null,
        timer: null,
        history: [],
        newGame: null,
        isNewGameClicked: false,
        isSoundOn: true,
    },

    isNearEmptyGem(element) {
        return ((Math.abs(parseFloat(element.style.top) - parseFloat(this.elements.emptyGem.style.top)) === this.elements.gemSize)
                && (Math.abs(parseFloat(element.style.left) - parseFloat(this.elements.emptyGem.style.left)) === 0))
               || ((Math.abs(parseFloat(element.style.top) - parseFloat(this.elements.emptyGem.style.top)) === 0)
                && (Math.abs(parseFloat(element.style.left) - parseFloat(this.elements.emptyGem.style.left)) === this.elements.gemSize));
    },

    init(boardSize = 16, gemSize = 25) {
        this.elements.gems = [];

        for (let i = 0; i < boardSize; i++) {
            this.elements.gems.push(i);
        }

        // create board

        const wrapper = document.createElement('div');
        const info = document.createElement('div');
        this.elements.turns = document.createElement('div');
        this.elements.time = document.createElement('div');
        this.elements.newGame = document.createElement('div');
        const board = document.createElement('div');
        const solveButton = document.createElement('div');
        const toggleSounds = document.createElement('div');

        wrapper.classList.add('wrapper');
        info.classList.add('info');
        this.elements.turns.classList.add('turns');
        this.elements.time.classList.add('time');
        this.elements.newGame.classList.add('new-game');
        board.classList.add('board');
        solveButton.classList.add('solve-button');
        toggleSounds.classList.add('toggle-sounds');

        wrapper.appendChild(info);
        info.appendChild(this.elements.turns);
        info.appendChild(this.elements.time);
        info.appendChild(this.elements.newGame);
        wrapper.appendChild(board);
        wrapper.appendChild(solveButton);
        wrapper.appendChild(toggleSounds);
        document.body.appendChild(wrapper);

        this.elements.currentTime = 0;
        this.elements.currentTimeMinutes = 0;
        this.elements.currentTurns = 0;
        this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
        this.elements.time.innerHTML = `Time: 0${this.elements.currentTimeMinutes}:0${this.elements.currentTime}`;
        this.elements.newGame.innerHTML = 'New Game';
        solveButton.innerText = 'Solve Puzzle';
        toggleSounds.innerText = 'turn off sounds';

        // create elements

        this.elements.gems.forEach((element) => {
            this.elements.gem = document.createElement('div');
            this.elements.gem.classList.add('gem');

            switch (gemSize) {
            case 12.5:
                this.elements.gem.classList.add('gem-8x8');
                switch (element) {
                case 0:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 1:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 2:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 3:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 4:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 5:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 6:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 7:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 8:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 9:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 10:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 11:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 12:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 13:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 14:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 15:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 16:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '12.5%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 17:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 18:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 19:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 20:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 21:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 22:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 23:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 24:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 25:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 26:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 27:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 28:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 29:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 30:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 31:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 32:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '37.5%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 33:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 34:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 35:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 36:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 37:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 38:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 39:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 40:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 41:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 42:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 43:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 44:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 45:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 46:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 47:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 48:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '62.5%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 49:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 50:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 51:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 52:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 53:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 54:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 55:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 56:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '87.5%';
                    break;
                case 57:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 58:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '12.5%';
                    break;
                case 59:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 60:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '37.5%';
                    break;
                case 61:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 62:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '62.5%';
                    break;
                case 63:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '87.5%';
                    this.elements.gem.style.left = '75%';
                    break;
                default:
                    break;
                }
                break;
            case 25:
                this.elements.gem.classList.add('gem-4x4');
                switch (element) {
                case 0:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 1:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 2:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 3:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 4:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 5:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 6:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 7:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 8:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 9:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 10:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 11:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '50%';
                    break;
                case 12:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '75%';
                    break;
                case 13:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 14:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '25%';
                    break;
                case 15:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '50%';
                    break;
                default:
                    break;
                }
                break;
            case 33.333:
                this.elements.gem.classList.add('gem-3x3');
                switch (element) {
                case 0:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '66.666%';
                    this.elements.gem.style.left = '66.666%';
                    break;
                case 1:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 2:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '33.333%';
                    break;
                case 3:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '66.666%';
                    break;
                case 4:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '33.333%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 5:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '33.333%';
                    this.elements.gem.style.left = '33.333%';
                    break;
                case 6:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '33.333%';
                    this.elements.gem.style.left = '66.666%';
                    break;
                case 7:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '66.666%';
                    this.elements.gem.style.left = '0%';
                    break;
                case 8:
                    this.elements.gem.classList.add(`gem-${element}`);
                    this.elements.gem.style.top = '66.666%';
                    this.elements.gem.style.left = '33.333%';
                    break;
                default:
                    break;
                }
                break;
            default:
                break;
            }

            this.elements.gem.insertAdjacentText('beforeend', element);
            board.appendChild(this.elements.gem); // put gem into board
        });

        this.elements.currentGems = document.querySelectorAll('.gem');
        this.elements.emptyGem = document.querySelector('.gem-0');

        this.startNewGame();
        this.moveGems();

        solveButton.addEventListener('click', () => {
            this.solveGame();
        });

        this.elements.isNewGameClicked = false;

        toggleSounds.addEventListener('click', () => { this.elements.isSoundOn = !this.elements.isSoundOn; toggleSounds.innerText = this.elements.isSoundOn ? 'turn off sounds' : 'turn on sounds'; });
    },

    shuffleGems() {
        for (let i = 0; i < this.elements.gems.length ** 2; i++) {
            const nearestElements = Array.from(this.elements.currentGems).filter((element) => !element.classList.contains('gem-0') && this.isNearEmptyGem(element));

            const randomGem = Math.floor(Math.random() * nearestElements.length);
            // change styles between element and emptyGem
            const tempTop = nearestElements[randomGem].style.top;
            const tempLeft = nearestElements[randomGem].style.left;

            nearestElements[randomGem].style.top = this.elements.emptyGem.style.top;
            nearestElements[randomGem].style.left = this.elements.emptyGem.style.left;

            this.elements.history.push([this.elements.emptyGem.style.top, this.elements.emptyGem.style.left]);
            if (this.elements.history.length > 2
                        && this.elements.history[this.elements.history.length - 1][0] === this.elements.history[this.elements.history.length - 3][0]
                        && this.elements.history[this.elements.history.length - 1][1] === this.elements.history[this.elements.history.length - 3][1]) {
                this.elements.history.pop();
                this.elements.history.pop();
            }

            this.elements.emptyGem.style.top = tempTop;
            this.elements.emptyGem.style.left = tempLeft;
        }
    },

    moveGems() {
        this.elements.currentGems.forEach((element) => {
            element.addEventListener('click', () => {
                if (!element.classList.contains('gem-0') && this.isNearEmptyGem(element)) {
                    // change styles between element and emptyGem
                    const tempTop = element.style.top;
                    const tempLeft = element.style.left;

                    element.style.transitionDuration = '0.5s';
                    element.style.top = this.elements.emptyGem.style.top;
                    element.style.left = this.elements.emptyGem.style.left;
                    this.playSound();
                    setTimeout(() => { element.style.transitionDuration = null; }, 500);

                    this.elements.history.push([this.elements.emptyGem.style.top, this.elements.emptyGem.style.left]);
                    if (this.elements.history.length > 2
                        && this.elements.history[this.elements.history.length - 1][0] === this.elements.history[this.elements.history.length - 3][0]
                        && this.elements.history[this.elements.history.length - 1][1] === this.elements.history[this.elements.history.length - 3][1]) {
                        this.elements.history.pop();
                        this.elements.history.pop();
                    }

                    this.elements.emptyGem.style.top = tempTop;
                    this.elements.emptyGem.style.left = tempLeft;

                    this.elements.currentTurns++;
                    this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
                }
            });
        });
    },

    startTimer() {
        this.elements.timer = setInterval(() => {
            this.elements.currentTime++;
            if (this.elements.currentTime === 60) {
                this.elements.currentTimeMinutes++;
                this.elements.currentTime = 0;
            }

            if (this.elements.currentTimeMinutes < 10 && this.elements.currentTime < 10) {
                this.elements.time.innerHTML = `Time: 0${this.elements.currentTimeMinutes}:0${this.elements.currentTime}`;
            } else if (this.elements.currentTimeMinutes < 10 && this.elements.currentTime >= 10) {
                this.elements.time.innerHTML = `Time: 0${this.elements.currentTimeMinutes}:${this.elements.currentTime}`;
            } else if (this.elements.currentTimeMinutes >= 10 && this.elements.currentTime < 10) {
                this.elements.time.innerHTML = `Time: ${this.elements.currentTimeMinutes}:0${this.elements.currentTime}`;
            } else {
                this.elements.time.innerHTML = `Time: ${this.elements.currentTimeMinutes}:${this.elements.currentTime}`;
            }
        }, 1000);
    },

    stopTimer() {
        clearInterval(this.elements.timer);
    },

    startNewGame() {
        this.elements.newGame.addEventListener('click', () => {
            this.elements.isNewGameClicked = true;

            const popupNewGame = document.createElement('div');
            const newGameTitle = document.createElement('div');
            const newGame3x3 = document.createElement('div');
            const newGame4x4 = document.createElement('div');
            const newGame8x8 = document.createElement('div');
            const closeButton = document.createElement('div');

            popupNewGame.classList.add('popup-new-game');
            newGameTitle.classList.add('popup-new-game-title');
            newGame3x3.classList.add('popup-new-game-content');
            newGame4x4.classList.add('popup-new-game-content');
            newGame8x8.classList.add('popup-new-game-content');
            closeButton.classList.add('popup-new-game-close');

            newGameTitle.innerText = 'Choose size\nof board:';
            newGame3x3.innerText = '3 x 3';
            newGame4x4.innerText = '4 x 4';
            newGame8x8.innerText = '8 x 8';
            closeButton.innerText = 'close';

            document.body.appendChild(popupNewGame);
            popupNewGame.appendChild(newGameTitle);
            popupNewGame.appendChild(newGame3x3);
            popupNewGame.appendChild(newGame4x4);
            popupNewGame.appendChild(newGame8x8);
            popupNewGame.appendChild(closeButton);

            newGame3x3.addEventListener('click', () => {
                document.body.innerHTML = '';
                this.elements.isNewGameClicked = true;
                this.elements.history = [];
                this.elements.boardSize = 9;
                this.elements.gemSize = 33.333;
                this.stopTimer();
                this.init(9, 33.333);
                this.shuffleGems();
                this.startTimer();
            });

            newGame4x4.addEventListener('click', () => {
                document.body.innerHTML = '';
                this.elements.isNewGameClicked = true;
                this.elements.history = [];
                this.elements.boardSize = 16;
                this.elements.gemSize = 25;
                this.stopTimer();
                this.init(16, 25);
                this.shuffleGems();
                this.startTimer();
            });

            newGame8x8.addEventListener('click', () => {
                document.body.innerHTML = '';
                this.elements.isNewGameClicked = true;
                this.elements.history = [];
                this.elements.boardSize = 64;
                this.elements.gemSize = 12.5;
                this.stopTimer();
                this.init(64, 12.5);
                this.shuffleGems();
                this.startTimer();
            });

            closeButton.addEventListener('click', () => {
                popupNewGame.remove();
                this.elements.isNewGameClicked = false;
            });
        });
    },

    solveGame() {
        if (this.elements.isNewGameClicked === true) return;

        this.stopTimer();
        this.elements.currentTurns = 0;
        this.elements.currentTime = 0;
        this.elements.currentTimeMinutes = 0;
        this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
        this.elements.time.innerHTML = `Time: 0${this.elements.currentTimeMinutes}:0${this.elements.currentTime}`;

        const currentElement = document.body.querySelector(`[style="top: ${this.elements.history[this.elements.history.length - 1][0]}; left: ${this.elements.history[this.elements.history.length - 1][1]};"]`);

        currentElement.style.transitionDuration = '0.1s';
        currentElement.style.top = this.elements.emptyGem.style.top;
        currentElement.style.left = this.elements.emptyGem.style.left;
        setTimeout(() => { currentElement.style.transitionDuration = null; }, 100);

        this.elements.emptyGem.style.top = `${this.elements.history[this.elements.history.length - 1][0]}`;
        this.elements.emptyGem.style.left = `${this.elements.history[this.elements.history.length - 1][1]}`;

        this.elements.history.pop();

        if (this.elements.history.length === 0 || this.elements.isNewGameClicked === true) return;

        setTimeout(() => {
            this.solveGame();
        }, 100);
    },

    playSound() {
        if (this.elements.isSoundOn) {
            const audio = new Audio();
            audio.src = 'audio/turn.mp3';
            audio.autoplay = true;
        }
    },

};

Game.init();
