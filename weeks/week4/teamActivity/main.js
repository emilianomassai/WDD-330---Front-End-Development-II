// store the board class into variable for future use
const board = document.querySelector('.board');

// store the reset button in the variable
const resetButton = document.getElementById('reset');

// create player one and two
const player1 = '🌝';
const player2 = '🌚';

// the game starts with player 1
let player = player1;

// function to add a symbol to the board 
function nextMove(e) {
    // check if we have the right element
    console.log(e.target);
    // enter the symbol of the clicked element into the 
    // table
    e.target.innerHTML = player;
    // pass the turn to the next player 
    if (player === player1) player = player2;
    else player = player1;
}

// function to reset the game, used when clicking on reset button
function resetGame() {
    console.dir(board);
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            // remove all the symbols from the board setting to 
            // empty string 
            row.cells[j].innerHTML = '';
        }
    }
}

// each time the player clicks on the board, fire the function nextMove
board.addEventListener('click', nextMove);

// reset the game each time the reset button has been clicked
reset.addEventListener('click', resetGame);

