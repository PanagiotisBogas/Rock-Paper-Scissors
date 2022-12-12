function playerSelection(){
    let playerChoice = prompt("Rock, Paper, Scissors!");

    return playerChoice; 
}

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);
    if(compChoice == 0){
        return "ROCK";
    }else if(compChoice == 1){
        return "PAPER";
    }else{
        return "SCISSORS";
    }
}

function playRound(playerChoice, compChoice){
    let outcome;
    if(playerChoice.toUpperCase() === compChoice){
        // outcome = (`It's a tie! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`); 
        outcome = "tie"; 
    }else if(playerChoice.toUpperCase() == "ROCK" && compChoice == "PAPER"){
        // outcome = (`Comp wins! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`);
        outcome = "comp";
    }else if(playerChoice.toUpperCase() == "PAPER" && compChoice == "ROCK"){
        // outcome = (`Player wins! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`); 
        outcome = "player";
    }else if(playerChoice.toUpperCase() == "ROCK" && compChoice == "SCISSORS"){
        // outcome = (`Player wins! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`);
        outcome = "player";
    }else if(playerChoice.toUpperCase() == "SCISSORS" && compChoice == "ROCK"){
        // outcome = (`Comp wins! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`);
        outcome = "comp";
    }else if(playerChoice.toUpperCase() == "PAPER" && compChoice == "SCISSORS"){
        // outcome = (`Comp wins! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`); 
        outcome = "comp";
    }else if(playerChoice.toUpperCase() == "SCISSORS" && compChoice == "PAPER"){
        // outcome = (`Player wins! Player: ${playerChoice.toUpperCase()} | Comp: ${compChoice}`);
        outcome = "player";
    }
    return outcome;
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for(let i=0; i<5; i++){
        let playerTurn = playerSelection();
        let compTurn = getComputerChoice();
        if(playRound(playerTurn, compTurn) === "player"){
            console.log(`Player gets the point! ${playerTurn} beats ${compTurn} `);
            playerScore++;
        }else if(playRound(playerTurn, compTurn) === "comp"){
            console.log(`Computer gets the point! ${compTurn} beats ${playerTurn} `);
            compScore++;
        }else{
            console.log(`It's a tie! ${playerTurn} and ${compTurn} `);
        }
    }
    if(playerScore > compScore){
        console.log("You win!");
    }else if(compScore > playerScore){
        console.log("You lost :( computer won");
    }else{
        console.log("Oh oh! It's a tie!");
    }
}

game();

