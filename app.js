const cards = document.querySelectorAll('.card');
const score = document.getElementById('score')



const gameBoard = new Board(cards, score);


gameBoard.display();

