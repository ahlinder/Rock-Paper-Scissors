const playingObject = ["rock", "paper", "scissors"];

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

function oneRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("Both selected " + playerSelection + ", it was a draw.");
        return "draw";
    }
    else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            console.log("Computer won with " + computerSelection + " against " + playerSelection);
            return "computer";
        }
        else{
            console.log("Player won with " + playerSelection+ " against " + computerSelection);
            return "player";
        }
     }
     else if(playerSelection === "paper"){
        if(computerSelection === "scissors"){
            console.log("Computer won with " + computerSelection + " against " + playerSelection);
            return "computer";
        }
        else{
            console.log("Player won with " + playerSelection+ " against " + computerSelection);
            return "player";
        }
     }
     else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            console.log("Computer won with " + computerSelection + " against " + playerSelection);
            return "computer";
        }
        else{
            console.log("Player won with " + playerSelection+ " against " + computerSelection);
            return "player";
        }
     }
}

/*Use prompt to let user write input
if input isn't correct ask for input again*/
function getUserInput(){
    let input = "";
    while(!playingObject.includes(input)){
        if(input !== ""){
            console.log("You can only select:'rock', 'paper' or 'scissors' ")
        }
        input = prompt("Select 'rock', 'paper' or 'scissors'.");
        input = input.toLowerCase();
    }
    return input;
}

/* create scores for user and pc
    loop over game until one of the scores reach 5 points,
    then exit loop*/
function game(){
    let userScore = 0;
    let computerScore = 0;
    while(computerScore !== 5 && userScore !== 5){
        let playerSelection = getUserInput();
        let winner = oneRound(playerSelection, getComputerChoice());
        if(winner === "player"){
            userScore++;
        }
        else if(winner === "computer"){
            computerScore++;
        }
    }

    if(userScore === 5){
        console.log("Player won with " + userScore + " against " + computerScore + "!");
    }
    else{
        console.log("Computer won with " + computerScore + " against " + userScore + "!");
    }
}

game();