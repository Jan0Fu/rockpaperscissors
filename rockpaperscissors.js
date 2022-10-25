function computerChoice() {
    let myArray = ["rock", "paper", "scissors"];
    let random = myArray[Math.floor(Math.random() * myArray.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "You win, rock beats scissors" ;
    }
  
}
let computerSelection = computerChoice();
let playerChoice = prompt("rock?, paper? or scissors?");
let playerSelection = playerSelection.toLowerCase();
console.log(playRound(playerSelection, computerSelection));

/*let counter
  function game(playRound()) {
    for (let i = 0; i < 5; i++)
  }

*/ 