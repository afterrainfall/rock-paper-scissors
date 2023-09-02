// initialize game records

let round = 1;
let roundFinal = 5;
let playerScore = 0;
let computerScore = 0;


// pick play choice

function getPlayerChoice() {
let playerPick = prompt(`Round ${round} Pick?`, "Rock");
playerPick = playerPick.toLowerCase();

if (playerPick == "rock" || playerPick == "paper" || playerPick == "scissors") { 
  return playerPick = playerPick.toUpperCase().slice(0, 1) + playerPick.slice(1);
} else {
  return "Try Again";
}
}


// pick computer choice

function getComputerChoice() { 
    
let computerPick = Math.min(Math.floor(Math.random() * 10) + 1, 9);

return computerPick = (computerPick <= 3) ? "Rock" :
               (computerPick <= 6) ? "Paper" :
               "Scissors";    
}


// start game rounds

function playRound(playerSelection, computerSelection) {
alert(`Player selected ${playerSelection}.`);
alert(`Computer selected ${computerSelection}.`);

  if (playerSelection == "Rock") {
      if (computerSelection == "Scissors") {
         alert(`Round ${round}: Player wins!`);	
         playerScore += 1;
      } else if (computerSelection == "Paper") {
         alert(`Round ${round}: Computer wins!`);	
         computerScore += 1;
      } else {
         alert(`Round ${round}: Draw!`);
         roundFinal += 1;
      }

  } else if (playerSelection == "Paper") {
      if (computerSelection == "Rock") {
         alert(`Round ${round}: Player wins!`);	
         playerScore += 1;
      } else if (computerSelection == "Scissors") {
         alert(`Round r${round}: Computer wins!`);	
         computerScore += 1;
      } else {
         alert(`Round ${round}: Draw!`);
         roundFinal += 1;
      }

  } else if (playerSelection == "Scissors") {
      if (computerSelection == "Paper") {
         alert(`Round ${round}: Player wins!`);	
         playerScore += 1;
      } else if (computerSelection == "Rock") {
         alert(`Round ${round}: Computer wins!`);	
         computerScore += 1;
      } else {
         alert(`Round ${round}: Draw!`);
         roundFinal += 1;
      }
  }

  alert(`Player Score: ${playerScore}`);
  alert(`Computer Score: ${computerScore}`);
}




// play game

function gameStart() {
for (round = 1; round < roundFinal + 1; round++) { 
 if (playerScore == 3 || computerScore == 3) {  
 break; 
 } else {
 playRound(getPlayerChoice(), getComputerChoice());
 }
} 

let winner = (playerScore > computerScore) ? 
`Winner: Player
 Rounds: ${round}
 Score: ${playerScore} : ${computerScore}`
: 
`Winner: Computer
 Rounds: ${round}
 Score: ${playerScore} : ${computerScore}`;
return winner;
}

gameStart()

