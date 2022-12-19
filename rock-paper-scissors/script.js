let playerScoreLabel = document.querySelector('#player-score-label');
let compScoreLabel = document.querySelector('#comp-score-label');
let resultLabel = document.querySelector('#result');
let buttons = document.querySelectorAll('.move');
let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click", ()=>{
     player = button.textContent;
     computerTurn();
     playerScoreLabel.textContent = `${player}`;
     compScoreLabel.textContent = `${computer}`;
     resultLabel.textContent = winner();
}));

function computerTurn(){
     const randNum = Math.floor(Math.random() * 3)+1;
    
     switch(randNum){
        case 1:
            computer = "✊";
            break;
        case 2:
            computer = "✋";
            break;
        case 3:
            computer = "✌";
            break;
     }
} 

function winner(){
    if(player == computer){
        return "Draw";
    }else if(computer == "✊"){
        return(player == "✋") ? "You Win" : "You Lose";
    }else if(computer == "✋"){
        return(player == "✌") ? "You Win" : "You Lose";
    }else if(computer == "✌"){
        return(player == "✊") ? "You Win" : "You Lose";
    }
}