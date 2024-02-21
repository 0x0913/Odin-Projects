"use strict";

const choices = ["Rock","Paper","Scissor"];

let playerCounter = 0, computerCounter = 0;

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



const container = document.querySelector(".content");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{

    button.addEventListener('click',(e) =>{

        const div = document.createElement("div");
        let message = playRound(button.id.slice(3),getComputerChoice())

        div.innerHTML = message;
        
        container.prepend(div);

        if(message.indexOf("Win") != -1){
            playerCounter++;
        }else if(message.indexOf("Lose") != -1){
            computerCounter++;
        }

        if(playerCounter == 5 || computerCounter == 5){
            const winner = document.createElement("div");
            winner.innerHTML = playerCounter > computerCounter ? "Player Win!":"Computer Win!";
            container.prepend(winner);

            playerCounter = 0;
            computerCounter = 0;
        }
        
    });

});

