const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const currentRound = document.querySelector('#currentRound');
const score = document.querySelector('#score');

rock.addEventListener('click', function () {
    playRound('rock', computerChoice())
});
paper.addEventListener('click', function () {
    playRound('paper', computerChoice())
});
scissors.addEventListener('click', function () {
    playRound('scissors', computerChoice())
});

let computerScore = 0;
let playerScore = 0;
function computerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * myArray.length);
    return myArray[randomNum];
}
function gameOver() {
    return playerScore === 5 || computerScore === 5;
}
function playRound(playerSelection, computerSelection) {
    if (!gameOver()) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == computerSelection) {
            currentRound.textContent = `Draw! Both ${playerSelection}, play again`;
        } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" &&
                computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
            currentRound.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
        } else {
            currentRound.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
        }
        score.textContent = updateScore()
        if (playerScore === 5) {
            currentRound.textContent = "You won the game! Congratulations!"
        }
        else if (computerScore === 5) {
            currentRound.textContent = "You lost to a computer! Try again"
        }
    }
    else {
        alert("Game is over. Refresh page to play again")
    }
}
function updateScore() {
    return `Score is: Player  ${playerScore}-${computerScore}  Computer`
}