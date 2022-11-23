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