function computerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    return random;
}
let computerPoints = 0;
let playerPoints = 0;
let computerSelection = computerChoice();
//let playerChoice = prompt("rock?, paper? or scissors?");
//let playerSelection = playerChoice.toLowerCase();
let playerSelection = "rock"

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerPoints;
        return "You lose, paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerPoints;
        return "You win, rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerPoints;
        return "You win, paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerPoints;
        return "You lose, scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerPoints;
        return "You lose, rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        ++playerPoints;
        return "You win, rock beats scissors" ;
    }
  
}
//console.log(playRound(playerSelection, computerSelection));
let result = playRound(playerSelection, computerSelection);
let counter = 0;
function Game() {
  for (let i = 0; i < 5; i++) {
    if (result.includes("win")) {
        counter += 1;
    } else if (result.includes("lose")) {
        counter -= 1;
    } else {
        counter += 0;
    }
  }
  return counter;
}


