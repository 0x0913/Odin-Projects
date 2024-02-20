"use strict";

const choices = ["Rock","Paper","Scissor"];

const getComputerChoice = () => choices[Math.floor(Math.random()*3)];

const playRound = (playerSelection, computerSelection) => {

    let winner;
    let message;

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);

    if(playerSelection == computerSelection){
        winner = "Tie";
    }else if(playerSelection == "Rock" && computerSelection == "Scissor"){
        winner = "Player";
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        winner = "Player";
    }else if(playerSelection == "Scissor" && computerSelection == "Paper"){
        winner = "Player";
    }else {
        winner = "Computer";
    }

    if(winner == "Tie"){
        message = "Draw!"
    }else{
        message = "You "+(winner == "Player"? "Win! "+ playerSelection +" beats "+computerSelection:"Lose! "+ computerSelection +" beats "+ playerSelection);
    }

    return message;
};


const playGame = () => {

    let playerCounter = 0, computerCounter = 0, message ="";

    for(let i = 0; i < 5; i++){

        message = playRound(prompt("Rock Paper Scissor"), getComputerChoice());

        if(message.indexOf("Win") != -1){
            playerCounter++;
        }else if(message.indexOf("Lose") != -1){
            computerCounter++;
        }

        console.log(message);
    }

    console.log(playerCounter > computerCounter ? "Player Win!":"Computer Win!");
};

playGame();

