function com() {
    let option = ["rock", "paper", "scissors"];
    // let option = action.toLowerCase();
    let final = option[Math.floor(Math.random() * 3)];
    return final;
}

function user() {

    let userAction = prompt("enter action", "");
    let userStr = userAction.toLowerCase();
    return userStr;
}
const playerSelection = user();
var computerSelection = com();

function playRound(playerSelection, computerSelection) {
    // let playerScore;
    // let computerScore;


    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log("draw");
        } else if (computerSelection == "paper") {
            console.log("Computer win");
        } else if (computerSelection == "scissors") {
            console.log("user win");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            console.log("user win");
        } else if (computerSelection == "paper") {
            console.log("draw");
        } else if (computerSelection == "scissors") {
            console.log("computer win");
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            console.log("conputer win");
        } else if (computerSelection == "paper") {
            console.log("user win");
        } else if (computerSelection == "scissors") {
            console.log("draw");
        }
    } else {
        alert("please enter 'rock', 'paper', 'scissors'");
    }
}
playRound();



// const comAction = com();
// const userAction = "rock";
// console.log(comAction);