class Board {
    constructor(cards, score) {
        this.score = score;
        this.numScore = 0;
        this.cards = cards;
        this.numbers = this.generateRandomArray();
        this.clickOne = null;
        this.clickTwo = null;
        this.disableCards = false;

        this.flipCard = this.flipCard.bind(this);
     
        
        
    }


    createCards() { 

        this.cards.forEach((card, i) => {
            card.querySelector('.back-view img').src = this.getImagePath(this.numbers[i]);
            card.addEventListener('click', this.flipCard);

            
        })

            
    }



    display() {
        this.createCards();
        

    }

    getImagePath(value) {
        switch (value) {
            case 1: return 'img/apple.png';
            case 2: return 'img/banana-tree.png';
            case 3: return 'img/banana.png';
            case 4: return 'img/beach-hut.png';
            case 5: return 'img/bee.png';
            case 6: return 'img/burger.png';
            case 7: return 'img/candy.png';
            case 8: return 'img/chameleon.png';
            case 9: return 'img/cocktail.png';
            case 10: return 'img/cyclops.png';
            case 11: return 'img/dolphin.png';
            case 12: return 'img/donut.png';
            case 13: return 'img/fish.png';
            case 14: return 'img/frankenstein.png';
            case 15: return 'img/ghost-custom.png';
            case 16: return 'img/ghost.png';
            case 17: return 'img/grave.png';
            case 18: return 'img/guitar.png';
            case 19: return 'img/hot-dog.png';
            case 20: return 'img/ice-cream.png';
            case 21: return 'img/mite.png';
            case 22: return 'img/mollusc.png';
            case 23: return 'img/monster.png';
            case 24: return 'img/mummy.png';
            case 25: return 'img/pizza.png';
            case 26: return 'img/pumpkin.png';
            case 27: return 'img/pumpkin2.png';
            case 28: return 'img/sailboat.png';
            case 29: return 'img/sea-turtle.png';
            case 30: return 'img/skeleton.png';
            case 31: return 'img/vampire.png';
            case 32: return 'img/winter-hat.png';
            default: return ''; 
        }
    }
    


    generateRandomArray() {
        const numbers = [];

        for(let i = 1; i <= 32; i++) {
            numbers.push(i, i);
        }


        for(let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }


        return numbers;

    }


    matchCards(img1, img2) {
        if(img1 === img2) {
            this.cardOne.removeEventListener('click', this.flipCard);
            this.cardTwo.removeEventListener('click', this.flipCard);

            this.cardOne = '';
            this.cardTwo = '';
            this.score.innerText = `${this.numScore += 1}`;
            
            this.disableCards = false;
            return this.disableCards = false;
        }


        this.disableCards = true;




        setTimeout(() => {
            this.cardOne.classList.add('shake');
            this.cardTwo.classList.add('shake');

        }, 400)


        setTimeout(() => {
            this.cardOne.classList.remove('flip', 'shake');
            this.cardTwo.classList.remove('flip', 'shake');
            

            

            this.cardOne = '';
            this.cardTwo = '';

            this.disableCards = false;

        }, 1200)
    }

    


    flipCard(event) {
        let cardClicked = event.target;



        if(cardClicked != this.cardOne && !this.disableCards) {
            cardClicked.classList.add('flip');


            if(!this.cardOne) {
                return this.cardOne = cardClicked;
            }


            this.cardTwo = cardClicked
            this.disableCards = true;


            let img1 = this.cardOne.querySelector('img').src;
            let img2 = this.cardTwo.querySelector('img').src;

            this.matchCards(img1, img2);




        }
      
    }


    
}