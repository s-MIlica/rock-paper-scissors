console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 3));

function getComputerChoice() {      //using Math.random make a choice for computer
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

let playerChoice; 

function playRound (playerSelection, computerSelection) { //take user's choice from a promt and compare it with a computer's choice
    playerChoice = prompt("Choose your weapon! rock, paper or scissors, what will it be?", "rock"); //activate the promt for user to make their choice
    playerSelection = playerChoice; //give playerSelection value of promt the user makes
    console.log(playerSelection.toLowerCase() + " player's selection");
    computerSelection = getComputerChoice();         //using the getComputerChoice function to get random computer's choice 
    console.log(computerSelection + " computer's selection");
    let roundResult; //declaring the variable for round's results

    if (playerSelection.toLowerCase() == computerSelection) {  //in case of a draw
        return roundResult = "It's a draw"
    } else if ( playerSelection.toLowerCase() === "paper" && computerSelection == "rock" ||     //in case of a user win
                playerSelection.toLowerCase() === "scissors" && computerSelection == "paper" ||
                playerSelection.toLowerCase() === "rock" && computerSelection == "scissors") {
        return roundResult = "You win!"

    } else if ( playerSelection.toLowerCase() === "paper" && computerSelection == "scissors" ||     //in case of a computer win
                playerSelection.toLowerCase() === "scissors" && computerSelection == "rock" || 
                playerSelection.toLowerCase() === "rock" && computerSelection == "paper") {
        return roundResult = "Computer's win!"
    } else if (playerSelection.toLowerCase() != "paper" || playerSelection.toLowerCase() != "rock" || playerSelection.toLowerCase() != "scissors") { //in case the user didn't type in the choice correctly
        return roundResult = "you must only choose between rock, paper or scissors!"
    }
}

function game() { //play rounds until either computer or user gets five points

    for (let playerScore = 0, computerScore = 0; playerScore < 5 || computerScore < 5;) { //counts player's and computer's score until someone reaches 5
        let abc = playRound(playerChoice);

        if (abc == "You win!") {  //depenting on choices update the scores
             playerScore = playerScore + 1, console.log(`${abc} computer ${computerScore}:${playerScore} you`);
        } else if (abc == "Computer's win!") {
             computerScore = computerScore + 1, console.log(`${abc} computer ${computerScore}:${playerScore} you`);
        } else {
             playerScore = playerScore + 0,
            computerScore = computerScore + 0, console.log(`${abc} computer ${computerScore}:${playerScore} you`);
        }

        if (playerScore == 5) { //once someone reaches 5 points loop ends and declares the winner
            return console.log(`Congratulations! you are the winner`)
        } else if (computerScore == 5) {
            return console.log(`Computer's victory! More luck next time!`)
        }
    }
}