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
  let playerMove = move;
  const computerMove = getComputerChoice();
//first if your move is rock
  if (playerMove === 'rock' && computerMove === 'rock') {
    score.ties++;
    resultDisplayer.textContent = `It's a tie!
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'rock' && computerMove === 'paper') {
    score.losses++;
    resultDisplayer.textContent = `You lose! ${computerMove} beats ${playerMove}
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'rock' && computerMove === 'scissors') {
    score.wins++;
    resultDisplayer.textContent = `You win! ${playerMove} beats ${computerMove}
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }

  //if you choose paper

  if (playerMove === 'paper' && computerMove === 'rock') {
    score.wins++;
    resultDisplayer.textContent = `You win! ${playerMove} beats ${computerMove}
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'paper' && computerMove === 'paper') {
    score.ties++;
    resultDisplayer.textContent = `It's a tie!
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'paper' && computerMove === 'scissors') {
    score.losses++;
    resultDisplayer.textContent = `You lose! ${computerMove} beats ${playerMove}
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }

  //if you choose scissors

  if (playerMove === 'scissors' && computerMove === 'rock') {
    score.losses++;
    resultDisplayer.textContent = `You lose! ${computerMove} beats ${playerMove}
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'scissors' && computerMove === 'paper') {
    score.wins++;
    resultDisplayer.textContent = `You win! ${playerMove} beats ${computerMove}
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;

  } else if (playerMove === 'scissors' && computerMove === 'scissors') {
    score.ties++;
    resultDisplayer.textContent = `It's a tie!
    Your Move: ${playerMove}, Computer Move: ${computerMove}. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  }

  if (score.wins === 5) {
    roundWinner.textContent = `Game over! You win the round. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
  } else if (score.losses === 5) {
    roundWinner.textContent = `Game over! Computer wins the round. Score: wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
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

/*const game = () => {
  if (roundsPlayed < 5) {
    roundsPlayed++
    return playRound()
  } else {
    if (score.wins > score.losses) {
      return `Game Over.
You won the round! Final score: wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    } else if (score.wins === score.losses) {
      return `Game Over.
You tied the round! Final score: wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    } else if (score.wins < score.losses) {
      return `Game Over.
Computer won the round! Final score: wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
    }
  }
}

for (let i = 0; i < 6; i++) {
  console.log(game());
}*/