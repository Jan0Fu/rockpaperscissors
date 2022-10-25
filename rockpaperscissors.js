let computerPoints = 0;
let playerPoints = 0;
function computerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * myArray.length);
    return myArray[randomNum];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie, you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerPoints++;
        return "You lose, paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerPoints++;
        return "You win, rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerPoints++;
        return "You win, paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerPoints++;
        return "You lose, scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerPoints++;
        return "You lose, rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        playerPoints++;
        return "You win, rock beats scissors" ;
    }
}
const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("rock?, paper? or scissors?").toLowerCase();
    const computerSelection = computerChoice();
    playRound(playerSelection, computerSelection)
  }
    if (playerPoints > computerPoints) {
        return "You beat computer, It's a Win!";
    } else if (playerPoints < computerPoints) {
        return "Computer beat you, you lost...";
    } else {
        return "It's a draw, not bad.";
    }
  }
(game());


