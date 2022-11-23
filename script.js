console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 3));



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);  //choose a random number between 1 and 3
    let computerResult;
    
    switch (randomNumber) {  //based on a randomNumber result get a computer's choice
        case 1:
            return computerResult = "paper"; 
        case 2:
            return computerResult = "rock";
        case 3:
            return computerResult = "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Choose your weapon! rock, paper or scissors, what will it be?");  //user inputs their choice
    console.log(playerSelection.toLowerCase() + " player's selection");
    computerSelection = getComputerChoice();         //using the getComputerChoice function to get random computer's choice 
    console.log(computerSelection + " computer's selection");
    let roundResult; //declaring the variable for round's results

    if (playerSelection.toLowerCase() == computerSelection) {  //in case of a draw
        return roundResult = "It's a draw"
    } else if ( playerSelection.toLowerCase() === "paper" && computerSelection == "rock" ||     //in case of a user win
                playerSelection.toLowerCase() === "scissors" && computerSelection == "paper" ||
                playerSelection.toLowerCase() === "rock" && computerSelection == "scissort") {
        return roundResult = "You win!"

    } else if ( playerSelection.toLowerCase() === "paper" && computerSelection == "scissors" ||     //in case of a computer win
                playerSelection.toLowerCase() === "scissors" && computerSelection == "rock" || 
                playerSelection.toLowerCase() === "rock" && computerSelection == "paper") {
        return roundResult = "Computer's win!"
    } else if (playerSelection.toLowerCase() != "paper" || playerSelection.toLowerCase() != "rock" || playerSelection.toLowerCase() != "scissors") { //in case the user didn't type in the choice correctly
        return roundResult = "you must only choose between rock, paper or scissors!"
    }
}