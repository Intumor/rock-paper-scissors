let roundsPlayed = 0;
const score = {
  wins: 0,
  losses: 0,
  ties: 0
}

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

const playRound = () => {
  let playerMove = prompt('Enter your move');

  playerMove = playerMove.toLowerCase();
  const computerMove = getComputerChoice();

//first if your move is rock
  if (playerMove === 'rock' && computerMove === 'rock') {
    score.ties++;
    return `It's a tie!
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  } else if (playerMove === 'rock' && computerMove === 'paper') {
    score.losses++;
    return `You lose! ${computerMove} beats ${playerMove}
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  } else if (playerMove === 'rock' && computerMove === 'scissors') {
    score.wins++;
    return `You win! ${playerMove} beats ${computerMove}
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  }

  //if you choose paper

  if (playerMove === 'paper' && computerMove === 'rock') {
    score.wins++;
    return `You win! ${playerMove} beats ${computerMove}
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  } else if (playerMove === 'paper' && computerMove === 'paper') {
    score.ties++;
    return `It's a tie!
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  } else if (playerMove === 'paper' && computerMove === 'scissors') {
    score.losses++;
    return `You lose! ${computerMove} beats ${playerMove}
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  }

  //if you choose scissors

  if (playerMove === 'scissors' && computerMove === 'rock') {
    score.losses++;
    return `You lose! ${computerMove} beats ${playerMove}
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  } else if (playerMove === 'scissors' && computerMove === 'paper') {
    score.wins++;
    return `You win! ${playerMove} beats ${computerMove}
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  } else if (playerMove === 'scissors' && computerMove === 'scissors') {
    score.ties++;
    return `It's a tie!
Your Move: ${playerMove}, Computer Move: ${computerMove}`;
  }
}

const game = () => {
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
}