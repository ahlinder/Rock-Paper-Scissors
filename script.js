const playingObject = ["rock", "paper", "scissors"];
let currentPlayerScore = 0;
let currentComputerScore = 0;
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('.roundResult');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        oneRound(button.className, getComputerChoice());
    })
})
/* array with rock, paper, scissors
    randmize a number between 0 and 2
    select the string at that position in the array*/
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
    return playingObject[randomNum];
}
/* let player write rock paper or scissors
    turn the input into lowercase
    check if input was correct, otherwise ask for input again
    call another function that checks who won and presents message*/


function updateScore(playerScore, computerScore){
    let scoreBoard = document.querySelector('.result');
    currentComputerScore = currentComputerScore + computerScore;
    currentPlayerScore = currentPlayerScore + playerScore;
    if(currentComputerScore < 5){
        if(currentPlayerScore < 5){
            scoreBoard.textContent = currentPlayerScore + "-" + currentComputerScore;
        }
        else{
            scoreBoard.textContent = "player won game with 5 against " + currentComputerScore;
            currentComputerScore = 0;
            currentPlayerScore = 0;
        }
    }

    else{
        scoreBoard.textContent = "computer won game with 5 against " + currentPlayerScore;
        currentComputerScore = 0;
        currentPlayerScore = 0;
    }
    
}
/* Called once a button is clicked with playerSelection as the button selected*/
function oneRound(playerSelection, computerSelection){
    let playerScore = 0;
    let computerScore = 0;
    if(playerSelection === computerSelection){
        roundResult.textContent = ("both selected " + playerSelection + ", it was a draw.");
        
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            roundResult.textContent = ("computer won with " + computerSelection + " against " + playerSelection);
            computerScore = 1;
        }
        else{
            roundResult.textContent = ("player won with " + playerSelection+ " against " + computerSelection);
            playerScore = 1;
        }
     }
     else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            roundResult.textContent = ("computer won with " + computerSelection + " against " + playerSelection);
            computerScore = 1;
        }
        else{
            roundResult.textContent = ("player won with " + playerSelection+ " against " + computerSelection);
            playerScore = 1;
        }
     }
     else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            roundResult.textContent = ("computer won with " + computerSelection + " against " + playerSelection);
            computerScore = 1;
        }
        else{
            roundResult.textContent = ("player won with " + playerSelection+ " against " + computerSelection);
            playerScore = 1;
        }
     }
     updateScore(playerScore, computerScore);
}
