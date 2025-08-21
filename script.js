function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  let winner = '';

  if (playerChoice === computerChoice) {
    winner = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')
  ) {
    winner = 'You win!';
  } else {
    winner = 'Computer wins!';
  }

  document.getElementById('winner').textContent = `Result: ${winner}`;
}