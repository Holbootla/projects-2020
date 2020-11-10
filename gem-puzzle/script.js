const Game = {
    
    elements: {
        wrapper: null,
        board: null,
        gems: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        gem: null,
        currentGems: null,
        emptyGem: null,
        info: null,
        turns: null,
        time: null,
        currentTime: null,
        currentTurns: null,
        timer: null
    },


    isNearEmptyGem (element) {
        return ((Math.abs(parseInt(element.style.top) -  parseInt(this.elements.emptyGem.style.top)) ===  25) &&
                (Math.abs(parseInt(element.style.left) - parseInt(this.elements.emptyGem.style.left)) === 0)) ||
               ((Math.abs(parseInt(element.style.top) -  parseInt(this.elements.emptyGem.style.top)) ===  0) &&
                (Math.abs(parseInt(element.style.left) - parseInt(this.elements.emptyGem.style.left)) === 25));
        
    },
    

    init () {

        // create board

        this.elements.wrapper = document.createElement('div');
        this.elements.info = document.createElement('div');
        this.elements.turns = document.createElement('div');
        this.elements.time = document.createElement('div');
        this.elements.newGame = document.createElement('div');
        this.elements.board = document.createElement('div');
        
        
        this.elements.wrapper.classList.add('wrapper');
        this.elements.info.classList.add('info');
        this.elements.turns.classList.add('turns');
        this.elements.time.classList.add('time');
        this.elements.newGame.classList.add('new-game');
        this.elements.board.classList.add('board');
        
        this.elements.wrapper.appendChild(this.elements.info);
        this.elements.info.appendChild(this.elements.turns);
        this.elements.info.appendChild(this.elements.time);
        this.elements.info.appendChild(this.elements.newGame);
        this.elements.wrapper.appendChild(this.elements.board);
        document.body.appendChild(this.elements.wrapper);

        this.elements.currentTime = 0;
        this.elements.currentTurns = 0;
        this.elements.turns.innerHTML = `Turns: ${this.elements.currentTurns}`;
        this.elements.time.innerHTML = `Seconds: ${this.elements.currentTime}`;
        this.elements.newGame.innerHTML = 'New Game';
                
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
            this.elements.board.appendChild(this.elements.gem); // put gem into board
        });

        this.elements.currentGems = document.querySelectorAll('.gem');
        this.elements.emptyGem = document.querySelector('.gem-0');
        
        this.startNewGame();
        this.moveGems();
        
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
            this.elements.time.innerHTML = `Seconds: ${this.elements.currentTime}`;
        }, 1000);
    },


    stopTimer () {
        clearInterval(this.elements.timer);
    },


    startNewGame () {
        this.elements.newGame.addEventListener('click', () => {
            document.body.innerHTML = '';
            this.stopTimer();
            this.init();
            this.shuffleGems();
            this.startTimer();
        })
    }


};

Game.init();