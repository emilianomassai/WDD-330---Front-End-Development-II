// store the board class into variable for future use
const board = document.querySelector('.board');

// check if the game is active
let isGameActive = true;

// store the reset button in the variable
const resetButton = document.getElementById('reset');
const statusDisplay = document.querySelector('.gameStatus');
const winningCounter = document.querySelector('.winningCounter');

// create player one and two
const player1 = '🌝';
const player2 = '🌚';
let player1Win = 0;
let player2Win = 0;

winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;

statusDisplay.innerHTML = `Please ${player1} start the game!`;
// the game starts with player 1
let player = player1;

// function to add a symbol to the board 
function nextMove(e) {
    // check if we have the right element
    console.log(e.target);
    // enter the symbol of the clicked element into the 
    // table
    if (e.target.innerHTML === '' && isGameActive) {
        e.target.innerHTML = player;
        // pass the turn to the next player 
        if (player === player1) player = player2;
        else player = player1;
        const currentPlayerTurn = () => `${player} Is your turn!`;
        statusDisplay.innerHTML = currentPlayerTurn();
    }

    // const winningMessage = () => `Player ${player} has won!`;
    // const drawMessage = () => `Game ended in a draw!`;



}

// function to reset the game, used when clicking on reset button
function resetGame() {
    console.dir(board);
    //reset player to player 1 as first move
    player = player1;
    statusDisplay.innerHTML = `Play again ${player1} Is your turn!`;
    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            // remove all the symbols from the board setting to 
            // empty string 
            row.cells[j].innerHTML = '';
        }
    }
    isGameActive = true;
}

// each time the player clicks on the board, fire the function nextMove
board.addEventListener('click', nextMove);
board.addEventListener('click', isGameEnd);

// reset the game each time the reset button has been clicked
reset.addEventListener('click', resetGame);




/// TO WORK ON THIS: https://www.codeleaks.io/tic-tac-toe-game-using-html-css-and-javascript/

//my functions to test 
// added id to spot each cell 

function isGameEnd() {
    // counter to check if the board if full
    let count = 0;

    // add points each winning game

    let zero = document.getElementById('0').innerHTML
    let one = document.getElementById('1').innerHTML
    let two = document.getElementById('2').innerHTML
    let three = document.getElementById('3').innerHTML
    let four = document.getElementById('4').innerHTML
    let five = document.getElementById('5').innerHTML
    let six = document.getElementById('6').innerHTML
    let seven = document.getElementById('7').innerHTML
    let eight = document.getElementById('8').innerHTML

    //reset player to player 1 as first move

    for (let i = 0; i < board.rows.length; i++) {
        let row = board.rows[i];
        for (let j = 0; j < row.cells.length; j++) {
            if (row.cells[j].innerHTML === '') {
                count++
            }
        }
    }


    if (zero === '🌝' && one === '🌝' && two === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;
        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }

    } else if (zero === '🌚' && one === '🌚' && two === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;

        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }

    } else if (zero === '🌝' && three === '🌝' && six === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;

        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }

    } else if (zero === '🌚' && three === '🌚' && six === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;
        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }


    } else if (three === '🌝' && four === '🌝' && five === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;

        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }

    } else if (three === '🌚' && four === '🌚' && five === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;
        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }


    }

    else if (zero === '🌝' && four === '🌝' && eight === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;
        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }



    } else if (zero === '🌚' && four === '🌚' && eight === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;
        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }


    } else if (two === '🌝' && five === '🌝' && eight === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;
        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }



    } else if (two === '🌚' && five === '🌚' && eight === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;
        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }



    } else if (one === '🌝' && four === '🌝' && seven === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;
        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }


    } else if (one === '🌚' && four === '🌚' && seven === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;
        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }



    } else if (two === '🌝' && four === '🌝' && six === '🌝') {
        statusDisplay.innerHTML = ` ${player1} You won!`;
        if (isGameActive) {
            player1Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }



    } else if (two === '🌚' && four === '🌚' && six === '🌚') {
        statusDisplay.innerHTML = ` ${player2} You won!`;
        if (isGameActive) {
            player2Win++;
            isGameActive = false;
            winningCounter.innerHTML = `🌝 ${player1Win} || 🌚 ${player2Win} `;
        }


    }
    if (count === 0) {
        isGameActive = false;
        statusDisplay.innerHTML = `It's a tie!`;

    }
    console.log("Player 1 Winning: " + player1Win)
    console.log("Player 2 Winning: " + player2Win)
    // console.log("document.getElementById('0').innerHTML " + document.getElementById('0').innerHTML)
    // if (document.getElementById('1').innerHTML === '') {

    // }


}