function computerPlay() {
    const picker = parseInt(Math.random() * 9);
    console.log(picker);
   
    switch (true) {
        case (picker >= 6):
            return("ROCK");
            break;
            
        case (picker >= 4):
            return("PAPER");
            break;

        case (picker >= 0):
            return("SCISSORS");
            break;
    }
}



function playRound(playerSelection, computerSelection){
    switch (true){
        case (playerSelection == "ROCK" && computerSelection == "SCISSORS"):
            return ("You win! Rock beats scissors.", true);
            break;
        case (playerSelection == "ROCK" && computerSelection == "PAPER"):
            return ("You lose! Paper beats rock.", false);
            break;
        case (playerSelection == "SCISSORS" && computerSelection == "PAPER"):
            return ("You win! Scissors beats paper.", true);
            break;
        case (playerSelection == "SCISSORS" && computerSelection == "ROCK"):
            return ("You lose! Rock beats scissors.", false);
            break;
        case (playerSelection == "PAPER" && computerSelection == "ROCK"):
            return ("You win! Paper beats rock.", true);
            break;
        case (playerSelection == "PAPER" && computerSelection == "SCISSORS"):
            return ("You lose! Scissors beats paper.", false);
            break;
        case (playerSelection == "ROCK" && computerSelection == "ROCK" || playerSelection == "SCISSORS" && computerSelection == "SCISSORS" || playerSelection == "SCISSORS" && computerSelection == "SCISSORS"):
            return ("Draw");
        default:
            return("Invalid");  
    } 
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    let noRound = prompt("Rounds", 3);

    for (let i = 0; i < noRound; i++) {
    let playerSelection = prompt("Choose your pick!", "ROCK");
    playerSelection = playerSelection.toUpperCase();


    let computerSelection = computerPlay();
    
    console.log(playerSelection);
    console.log(computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    
    if (playRound(playerSelection, computerSelection) == true) {
        playerScore += 1;
    }   else if (playRound(playerSelection, computerSelection) == false) {
        computerScore += 1;
    }
}
    
    let finalScore = (playerScore > computerScore) ? "Player wins!" : 
            (playerScore < computerScore) ? "Computer wins!" : "Draw!";

    console.log(finalScore);
    console.log(playerScore);
    console.log(computerScore);
}

console.log(game());
