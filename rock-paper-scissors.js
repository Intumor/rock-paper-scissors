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

const playRound = (playerMove, computerMove) => {

//first if your move is rock
  if (playerMove === 'rock' && computerMove === 'rock') {
    return `It's a tie! ${playerMove} can't beat ${computerMove}`;
  } else if (playerMove === 'rock' && computerMove === 'paper') {
    return `You lose! ${computerMove} beats ${playerMove}`;
  } else if (playerMove === 'rock' && computerMove === 'scissors') {
    return `You win! ${playerMove} beats ${computerMove}`;
  }

  //if you choose paper

  if (playerMove === 'paper' && computerMove === 'rock') {
    return `You win! ${playerMove} beats ${computerMove}`;
  } else if (playerMove === 'paper' && computerMove === 'paper') {
    return `It's a tie! ${playerMove} can't beat ${computerMove}`;
  } else if (playerMove === 'paper' && computerMove === 'scissors') {
    return `You lose! ${computerMove} beats ${playerMove}`;
  }

  //if you choose scissors

  if (playerMove === 'scissors' && computerMove === 'rock') {
    return `You lose! ${computerMove} beats ${playerMove}`;
  } else if (playerMove === 'scissors' && computerMove === 'paper') {
    return `You win! ${playerMove} beats ${computerMove}`;
  } else if (playerMove === 'scissors' && computerMove === 'scissors') {
    return `It's a tie! ${playerMove} can't beat ${computerMove}`;
  }
}


const playerMove = 'paper';
const computerMove = getComputerChoice();
console.log(playRound(playerMove, computerMove));