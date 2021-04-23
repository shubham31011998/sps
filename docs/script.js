function com() {
    let option = ["rock", "paper", "scissors"];
    // let option = action.toLowerCase();
    let final = option[Math.floor(Math.random() * 3)];
    // console.log(`com action : ${final}`);
    return final;
}

// function user() {

//     let userAction = prompt("enter action", "");
//     let userStr = userAction.toLowerCase();
//     // console.log(typeof(userStr));
//     console.log(`user action : ${userStr}`);
//     return userStr;
//     // console.log(userStr);
// }



function playRound(playerSelection, computerSelection) {

    computerSelection = com();
    document.getElementById("computer-action").innerHTML = computerSelection;
    document.getElementById("user-action").innerHTML = playerSelection;

    // console.log(`computer : ${computerSelection}`);
    // console.log(`player : ${playerSelection}`);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            document.getElementById("result").innerHTML = "Match Draw";
        }
        if (computerSelection === "paper") {
            document.getElementById("result").innerHTML = "Computer Win";
        }
        if (computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "Player Win";
        }
        // alert("player selection : rock");
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            document.getElementById("result").innerHTML = "Player Win";
        }
        if (computerSelection === "paper") {
            document.getElementById("result").innerHTML = "Match Draw";
        }
        if (computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "Computer Win";
        }
        // alert("player selection : paper");
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            document.getElementById("result").innerHTML = "Computer Win";
        }
        if (computerSelection === "paper") {
            document.getElementById("result").innerHTML = "Player Win";
        }
        if (computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "Match Draw";
        }
        // alert("player selection : stone");
    }
    // alert("please enter correct action");

}
// playRound();



// const comAction = com();
// const userAction = "rock";
// console.log(comAction);