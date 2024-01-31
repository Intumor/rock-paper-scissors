const score = {
  wins: 0,
  losses: 0,
  ties: 0
}

const resultDisplayer = document.querySelector('.result');
const roundWinner = document.querySelector('.round-winner');

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let computerMove;

  if (randomNumber === 1) {
    computerMove = 'rock';
  } else if (randomNumber === 2) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

const playRound = (move) => {
  if (score.wins === 5) {
    roundWinner.textContent = '';
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
  } else if (score.losses === 5) {
    roundWinner.textContent = '';
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
  }
  let playerMove = move;
  const computerMove = getComputerChoice();
  
  //if you choose rock

  if (playerMove === 'rock' && computerMove === 'rock') {
    score.ties++;
    resultDisplayer.innerHTML = `It's a Tie!<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br>
    Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'rock' && computerMove === 'paper') {
    score.losses++;
    resultDisplayer.innerHTML = `You lose!<br> ${computerMove} beats ${playerMove}<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'rock' && computerMove === 'scissors') {
    score.wins++;
    resultDisplayer.innerHTML = `You win!<br> ${playerMove} beats ${computerMove}<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }

  //if you choose paper

  if (playerMove === 'paper' && computerMove === 'rock') {
    score.wins++;
    resultDisplayer.innerHTML = `You win!<br> ${playerMove} beats ${computerMove}<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'paper' && computerMove === 'paper') {
    score.ties++;
    resultDisplayer.innerHTML = `It's a Tie!<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br>
    Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'paper' && computerMove === 'scissors') {
    score.losses++;
    resultDisplayer.innerHTML = `You lose!<br> ${computerMove} beats ${playerMove}<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }

  //if you choose scissors

  if (playerMove === 'scissors' && computerMove === 'rock') {
    score.losses++;
    resultDisplayer.innerHTML = `You lose!<br> ${computerMove} beats ${playerMove}<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'scissors' && computerMove === 'paper') {
    score.wins++;
    resultDisplayer.innerHTML = `You win!<br> ${playerMove} beats ${computerMove}<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'scissors' && computerMove === 'scissors') {
    score.ties++;
    resultDisplayer.innerHTML = `It's a Tie!<br>
    Your Move: ${playerMove}, Computer Move: ${computerMove}.<br>
    Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }

  if (score.wins === 5) {
    roundWinner.innerHTML = `Game over!<br> You win the round <br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  } else if (score.losses === 5) {
    roundWinner.innerHTML = `Game over!<br> Computer wins the round <br> Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }
}

const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', () => {
  playRound('rock');
});

paperButton.addEventListener('click', () => {
  playRound('paper');
});

scissorsButton.addEventListener('click', () => {
  playRound('scissors');
});