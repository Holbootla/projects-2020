const Game = {
    
    elements: {
        gems: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        gem: null,
        currentGems: null,
        emptyGem: null,
        turns: null,
        time: null,
        currentTime: null,
        currentTimeMinutes: null,
        currentTurns: null,
        timer: null,
        history: []
    },


    isNearEmptyGem (element) {
        return ((Math.abs(parseInt(element.style.top) -  parseInt(this.elements.emptyGem.style.top)) ===  25) &&
                (Math.abs(parseInt(element.style.left) - parseInt(this.elements.emptyGem.style.left)) === 0)) ||
               ((Math.abs(parseInt(element.style.top) -  parseInt(this.elements.emptyGem.style.top)) ===  0) &&
                (Math.abs(parseInt(element.style.left) - parseInt(this.elements.emptyGem.style.left)) === 25));
        
    },
    

    init () {

        // create board

        const wrapper = document.createElement('div');
        const info = document.createElement('div');
        this.elements.turns = document.createElement('div');
        this.elements.time = document.createElement('div');
        this.elements.newGame = document.createElement('div');
        const board = document.createElement('div');
        let solveButton = document.createElement('div');
        
        
        wrapper.classList.add('wrapper');
        info.classList.add('info');
        this.elements.turns.classList.add('turns');
        this.elements.time.classList.add('time');
        this.elements.newGame.classList.add('new-game');
        board.classList.add('board');
        solveButton.classList.add('solve-button');
        
        wrapper.appendChild(info);
        info.appendChild(this.elements.turns);
        info.appendChild(this.elements.time);
        info.appendChild(this.elements.newGame);
        wrapper.appendChild(board);
        wrapper.appendChild(solveButton);
        document.body.appendChild(wrapper);

        this.elements.currentTime = 0;
        this.elements.currentTimeMinutes = 0;
        this.elements.currentTurns = 0;
        this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
        this.elements.time.innerHTML = `Time: 0${this.elements.currentTimeMinutes}:0${this.elements.currentTime}`;
        this.elements.newGame.innerHTML = 'New Game';
        solveButton.innerHTML = 'Solve Puzzle';
                
        // create elements

        this.elements.gems.forEach(element => {
            this.elements.gem = document.createElement('div');
            this.elements.gem.classList.add('gem');

            switch (element) {
                case '0' :
                    this.elements.gem.classList.add(`gem-${element}`); 
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '75%';
                    break;
                case '1' :
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '0%';
                    break;
                case '2' :
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '25%';
                    break;
                case '3' :
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '50%';
                    break;
                case '4' :
                    this.elements.gem.style.top = '0%';
                    this.elements.gem.style.left = '75%';
                    break;
                case '5' :
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '0%';
                    break;
                case '6' :
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '25%';
                    break;
                case '7' :
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '50%';
                    break;
                case '8' :
                    this.elements.gem.style.top = '25%';
                    this.elements.gem.style.left = '75%';
                    break;
                case '9' :
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '0%';
                    break;
                case '10' :
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '25%';
                    break;
                case '11' :
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '50%';
                    break;
                case '12' :
                    this.elements.gem.style.top = '50%';
                    this.elements.gem.style.left = '75%';
                    break;
                case '13' :
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '0%';
                    break;
                case '14' :
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '25%';
                    break;
                case '15' :
                    this.elements.gem.style.top = '75%';
                    this.elements.gem.style.left = '50%';
                    break;
                default :
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
        })

    },


    shuffleGems () {
        
        for (let i = 0; i < this.elements.gems.length ** 2; i++) {
            
            const nearestElements = Array.from(this.elements.currentGems).filter(element => {
               return !element.classList.contains('gem-0') && this.isNearEmptyGem(element);
            }
            );
            
            const randomGem = Math.floor(Math.random() * nearestElements.length);
            // change styles between element and emptyGem
            let tempTop = parseInt(nearestElements[randomGem].style.top);
            let tempLeft = parseInt(nearestElements[randomGem].style.left);

            nearestElements[randomGem].style.top = `${parseInt(this.elements.emptyGem.style.top)}%`;
            nearestElements[randomGem].style.left = `${parseInt(this.elements.emptyGem.style.left)}%`;

            this.elements.history.push([this.elements.emptyGem.style.top, this.elements.emptyGem.style.left]);
                    if (this.elements.history.length > 2 &&
                        this.elements.history[this.elements.history.length - 1][0] === this.elements.history[this.elements.history.length - 3][0] && 
                        this.elements.history[this.elements.history.length - 1][1] === this.elements.history[this.elements.history.length - 3][1]) {
                        this.elements.history.pop();
                        this.elements.history.pop();
                    }

            this.elements.emptyGem.style.top = `${tempTop}%`;
            this.elements.emptyGem.style.left = `${tempLeft}%`;

        }

    },


    moveGems () {

       this.elements.currentGems.forEach(element => {
            element.addEventListener('click', () => {
                if (!element.classList.contains('gem-0') && this.isNearEmptyGem(element)) {

                    // change styles between element and emptyGem
                    let tempTop = parseInt(element.style.top);
                    let tempLeft = parseInt(element.style.left);
                    
                    element.style.transitionDuration = '0.5s';
                    element.style.top = `${parseInt(this.elements.emptyGem.style.top)}%`;
                    element.style.left = `${parseInt(this.elements.emptyGem.style.left)}%`;
                    setTimeout(() => {element.style.transitionDuration = null;}, 500);

                    this.elements.history.push([this.elements.emptyGem.style.top, this.elements.emptyGem.style.left]);
                    if (this.elements.history.length > 2 &&
                        this.elements.history[this.elements.history.length - 1][0] === this.elements.history[this.elements.history.length - 3][0] && 
                        this.elements.history[this.elements.history.length - 1][1] === this.elements.history[this.elements.history.length - 3][1]) {
                        this.elements.history.pop();
                        this.elements.history.pop();
                    }

                    this.elements.emptyGem.style.top = `${tempTop}%`;
                    this.elements.emptyGem.style.left = `${tempLeft}%`;

                    this.elements.currentTurns++;
                    this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
                }
            })
        })
        
    },


    startTimer () {
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


    stopTimer () {
        clearInterval(this.elements.timer);
    },


    startNewGame () {
        this.elements.newGame.addEventListener('click', () => {
            document.body.innerHTML = '';
            this.elements.history = [];
            this.stopTimer();
            this.init();
            this.shuffleGems();
            this.startTimer();
        })
    },

    solveGame () {
        
            this.stopTimer();
            this.elements.currentTurns = 0;
            this.elements.currentTime = 0;
            this.elements.currentTimeMinutes = 0;
            this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
            this.elements.time.innerHTML = `Time: 0${this.elements.currentTimeMinutes}:0${this.elements.currentTime}`;
            
            
            let currentElement = document.body.querySelector
            (`[style="top: ${this.elements.history[this.elements.history.length - 1][0]}; left: ${this.elements.history[this.elements.history.length - 1][1]};"]`);

            currentElement.style.transitionDuration = '0.1s';
            currentElement.style.top = this.elements.emptyGem.style.top;;
            currentElement.style.left = this.elements.emptyGem.style.left;
            setTimeout(() => {currentElement.style.transitionDuration = null;}, 100);

            this.elements.emptyGem.style.top = `${this.elements.history[this.elements.history.length - 1][0]}`;
            this.elements.emptyGem.style.left = `${this.elements.history[this.elements.history.length - 1][1]}`;

            this.elements.history.pop();
        
            if (this.elements.history.length === 0) return;

            setTimeout(() => {
                this.solveGame();
            }, 100);

    }


};

Game.init();