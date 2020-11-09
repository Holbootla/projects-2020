const Game = {
    
    elements: {
        wrapper: null,
        board: null,
        gems: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
        gem: null,
        currentGems: null,
        emptyGem: null
    },


    isNearEmptyGem (element) {
        return ((Math.abs(parseInt(element.style.top) -  parseInt(this.elements.emptyGem.style.top)) ===  125) &&
                (Math.abs(parseInt(element.style.left) - parseInt(this.elements.emptyGem.style.left)) === 0)) ||
               ((Math.abs(parseInt(element.style.top) -  parseInt(this.elements.emptyGem.style.top)) ===  0) &&
                (Math.abs(parseInt(element.style.left) - parseInt(this.elements.emptyGem.style.left)) === 125));
        
    },
    

    init () {

        // create board

        this.elements.wrapper = document.createElement('div'); // create wrapper
        this.elements.board = document.createElement('div'); // create board
        
        this.elements.wrapper.classList.add('wrapper');
        this.elements.board.classList.add('board');
        
        this.elements.wrapper.appendChild(this.elements.board); // put board into wrapper
        document.body.appendChild(this.elements.wrapper); // put wrapper into body

        // create elements

        this.elements.gems.forEach(element => {
            this.elements.gem = document.createElement('div');
            this.elements.gem.classList.add('gem');

            switch (element) {
                case '0' :
                    this.elements.gem.classList.add(`gem-${element}`); 
                    this.elements.gem.style.top = '375px';
                    this.elements.gem.style.left = '375px';
                    break;
                case '1' :
                    this.elements.gem.style.top = '0px';
                    this.elements.gem.style.left = '0px';
                    break;
                case '2' :
                    this.elements.gem.style.top = '0px';
                    this.elements.gem.style.left = '125px';
                    break;
                case '3' :
                    this.elements.gem.style.top = '0px';
                    this.elements.gem.style.left = '250px';
                    break;
                case '4' :
                    this.elements.gem.style.top = '0px';
                    this.elements.gem.style.left = '375px';
                    break;
                case '5' :
                    this.elements.gem.style.top = '125px';
                    this.elements.gem.style.left = '0px';
                    break;
                case '6' :
                    this.elements.gem.style.top = '125px';
                    this.elements.gem.style.left = '125px';
                    break;
                case '7' :
                    this.elements.gem.style.top = '125px';
                    this.elements.gem.style.left = '250px';
                    break;
                case '8' :
                    this.elements.gem.style.top = '125px';
                    this.elements.gem.style.left = '375px';
                    break;
                case '9' :
                    this.elements.gem.style.top = '250px';
                    this.elements.gem.style.left = '0px';
                    break;
                case '10' :
                    this.elements.gem.style.top = '250px';
                    this.elements.gem.style.left = '125px';
                    break;
                case '11' :
                    this.elements.gem.style.top = '250px';
                    this.elements.gem.style.left = '250px';
                    break;
                case '12' :
                    this.elements.gem.style.top = '250px';
                    this.elements.gem.style.left = '375px';
                    break;
                case '13' :
                    this.elements.gem.style.top = '375px';
                    this.elements.gem.style.left = '0px';
                    break;
                case '14' :
                    this.elements.gem.style.top = '375px';
                    this.elements.gem.style.left = '125px';
                    break;
                case '15' :
                    this.elements.gem.style.top = '375px';
                    this.elements.gem.style.left = '250px';
                    break;
                default :
                    break;
                
            }

            this.elements.gem.insertAdjacentText('beforeend', element);
            this.elements.board.appendChild(this.elements.gem); // put gem into board
        });

        this.elements.currentGems = document.querySelectorAll('.gem');
        this.elements.emptyGem = document.querySelector('.gem-0');
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

            nearestElements[randomGem].style.top = `${parseInt(this.elements.emptyGem.style.top)}px`;
            nearestElements[randomGem].style.left = `${parseInt(this.elements.emptyGem.style.left)}px`;

            this.elements.emptyGem.style.top = `${tempTop}px`;
            this.elements.emptyGem.style.left = `${tempLeft}px`;

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
                    element.style.top = `${parseInt(this.elements.emptyGem.style.top)}px`;
                    element.style.left = `${parseInt(this.elements.emptyGem.style.left)}px`;
                    setTimeout(() => {element.style.transitionDuration = null;}, 500);

                    this.elements.emptyGem.style.top = `${tempTop}px`;
                    this.elements.emptyGem.style.left = `${tempLeft}px`;
                }
            })
        })
        
    }


};


Game.init();
Game.shuffleGems();
Game.moveGems();