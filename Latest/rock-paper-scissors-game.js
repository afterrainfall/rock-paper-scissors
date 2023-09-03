// initialize game records

let round = 1;
// let draws = 0;
let playerScore = 0;
let computerScore = 0;



// pick play choice

// function getPlayerChoice(text) {

//    let playerPick = text;
//    playerPick = playerPick.toLowerCase();

//    if (playerPick == "rock" || playerPick == "paper" || playerPick == "scissors") { 
//      return playerPick = playerPick.toUpperCase().slice(0, 1) + playerPick.slice(1);
//    } else {
//      return "Try Again";
//    }
// }


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
        //  draws++;
      }

  } else if (playerSelection == "Paper") {
      if (computerSelection == "Rock") {
        alert(`Round ${round}: Player wins!`);	
         playerScore += 1;
      } else if (computerSelection == "Scissors") {
        alert(`Round ${round}: Computer wins!`);	
         computerScore += 1;
      } else {
        alert(`Round ${round}: Draw!`);
        //  draws++;
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
        //  draws++;
      }
  }

  resultPlayerScore.textContent = `Player Score: ${playerScore}`;
  resultComputerScore.textContent = `Computer Score: ${computerScore}`;

  if (playerScore == 3 || computerScore == 3) {
    gameEnd();
  }

  round++;
}

let button_1 = document.createElement('button');
let button_2 = document.createElement('button');
let button_3 = document.createElement('button');

let resultPlayerScore = document.createElement('div');
let resultComputerScore = document.createElement('div');


button_1.addEventListener('click', () => {
  playRound("Rock", getComputerChoice());
}
);
  
button_2.addEventListener('click', () => {
  playRound("Paper", getComputerChoice());
}
);

button_3.addEventListener('click', () => {
  playRound("Scissors", getComputerChoice());
}
);

// play game

function gameStart() {
  round = 1;
  // draws = 0;
    
  playerScore = 0;
  computerScore = 0;

  resultPlayerScore.textContent = '';
  resultComputerScore.textContent = '';
  
  alert('Game Start!');

  document.body.appendChild(button_1);
  document.body.appendChild(button_2);
  document.body.appendChild(button_3);

  document.body.appendChild(resultPlayerScore);
  document.body.appendChild(resultComputerScore);


//   for (round = 1; round < roundFinal + 1; round++) { 
//     alert(`Next Round: Round ${round}`);
}

function gameEnd() {
  document.body.removeChild(resultPlayerScore);
  document.body.removeChild(resultComputerScore);

  document.body.removeChild(button_1);
  document.body.removeChild(button_2);
  document.body.removeChild(button_3);

  let winner = (playerScore > computerScore) ? 
    `Winner: Player
    Rounds: ${round}
    Score: ${playerScore} : ${computerScore}` :
    
    `Winner: Computer
    Rounds: ${round}
    Score: ${playerScore} : ${computerScore}`;
   
  let resultWinner = document.createElement('div');
  resultWinner.textContent = `${winner}`;
  document.body.appendChild(resultWinner);

  const button_restart = document.createElement('button');
  button_restart.addEventListener('click', () => {
    document.body.removeChild(resultWinner);
    resultWinner.textContent = "";
    gameStart();
    document.body.removeChild(button_restart);
  });
  
  document.body.appendChild(button_restart);

}

//      break; 
//   } else {
      

  
      
//    }


   
gameStart()