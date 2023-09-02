// initialize game records

let round = 1;
let draws = 0;
let playerScore = 0;
let computerScore = 0;



// pick play choice

function getPlayerChoice(text) {

   let playerPick = text;
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
         round++;
      } else if (computerSelection == "Paper") {
         alert(`Round ${round}: Computer wins!`);	
         computerScore += 1;
         round++;
      } else {
         alert(`Round ${round}: Draw!`);
         draws++;
         round++;
      }

  } else if (playerSelection == "Paper") {
      if (computerSelection == "Rock") {
         alert(`Round ${round}: Player wins!`);	
         playerScore += 1;
         round++;
      } else if (computerSelection == "Scissors") {
         alert(`Round ${round}: Computer wins!`);	
         computerScore += 1;
         round++;
      } else {
         alert(`Round ${round}: Draw!`);
         draws++;
         round++;
      }

  } else if (playerSelection == "Scissors") {
      if (computerSelection == "Paper") {
         alert(`Round ${round}: Player wins!`);	
         playerScore += 1;
         round++;
      } else if (computerSelection == "Rock") {
         alert(`Round ${round}: Computer wins!`);	
         computerScore += 1;
         round++;
      } else {
         alert(`Round ${round}: Draw!`);
         draws++;
         round++;
      }
  }

  resultPlayerScore.textContent = `Player Score: ${playerScore}`;
  resultComputerScore.textContent = `Computer Score: ${computerScore}`;

  if (playerScore == 3 || computerScore == 3) {
   gameEnd();
   return;
 }
}

let button_1 = document.createElement('button');
let button_2 = document.createElement('button');
let button_3 = document.createElement('button');

let button_pick;

let resultPlayerScore = document.createElement('div');
let resultComputerScore = document.createElement('div');



// play game

function gameStart() {
  round = 1;
  draws = 0;
    
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

  button_1.addEventListener('click', () => {
    button_pick = "Rock";
    playRound(getPlayerChoice(button_pick), getComputerChoice());
  });

  button_2.addEventListener('click', () => {
    button_pick = "Paper";
    playRound(getPlayerChoice(button_pick), getComputerChoice());
  });

  button_3.addEventListener('click', () => {
    button_pick = "Scissors";
    playRound(getPlayerChoice(button_pick), getComputerChoice());
  });
     
  
//   for (round = 1; round < roundFinal + 1; round++) { 
//     alert(`Next Round: Round ${round}`);
}

function gameEnd() {
  document.body.removeChild(resultPlayerScore);
  document.body.removeChild(resultComputerScore);

  let winner = (playerScore > computerScore) ? 
    `Winner: Player
    Rounds: ${round - 1}
    Score: ${playerScore} : ${computerScore}
    Draws: ${draws}` :
    
    `Winner: Computer
    Rounds: ${round - 1}
    Score: ${playerScore} : ${computerScore}
    Draws: ${draws}`;
   
  let resultWinner = document.createElement('div');
  resultWinner.textContent = `${winner}`;
  document.body.appendChild(resultWinner);

  document.body.removeChild(button_1);
  document.body.removeChild(button_2);
  document.body.removeChild(button_3);
   
  const button_restart = document.createElement('button');
  button_restart.addEventListener('click', () => {
    document.body.removeChild(resultWinner);
    gameStart();
    document.body.removeChild(button_restart);
  });
  
  document.body.appendChild(button_restart);

}

//      break; 
//   } else {
      

  
      
//    }


   
gameStart()