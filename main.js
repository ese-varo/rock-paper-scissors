const OPTIONS = ["paper", "rock", "scissors"];
const PLAYER_ELECTION = document.querySelector(".player-election");
const PLAYER_WINS = document.querySelector(".player-wins");
const COMPUTER_ELECTION = document.querySelector(".computer-election");
const COMPUTER_WINS = document.querySelector(".computer-wins");
const START_GAME = document.querySelector("#start-game");
const WINNER = document.querySelector(".winner");
const ROUND = document.querySelector(".round");

const COMBINATIONS = {
  scissors: {
    rock: "lose",
    paper: "wins",
  },
  rock: {
    scissors: "wins",
    paper: "lose",
  },
  paper: {
    rock: "wins",
    scissors: "lose",
  },
};

START_GAME.addEventListener("click", () => {
  game();
});

function computerPlay() {
  return OPTIONS[RANDOM_INT(3, true)];
}

const RANDOM_INT = (num, includeZero = false) => {
  const RESULT = Math.floor(Math.random() * Math.floor(num));
  return includeZero ? RESULT : RESULT + 1;
};

function round(computerSelection, playerSelection) {
  if (computerSelection == playerSelection)
    return ["Drow! nobody wins", "none"];

  let winner;
  let message = "";
  if (COMBINATIONS[computerSelection][playerSelection] == "wins") {
    message += `Computer wins! ${computerSelection} wins over ${playerSelection}`;
    winner = "computer";
  } else {
    message += `Player wins! ${playerSelection} wins over ${computerSelection}`;
    winner = "player";
  }
  return [message, winner];
}

function game() {
  let rounds = 0;
  let playerRate = 0;
  let computerRate = 0;
  for (let i = 0; i < 8; i++) {
    const PLAYER = capturePlayer();
    if (isValidOption(PLAYER)) {
      i--;
      continue;
    }

    rounds++;
    const COMPUTER = computerPlay();
    const [MESSAGE, WINNER] = round(COMPUTER, PLAYER);
    if (WINNER == "player") playerRate++;
    else if (WINNER == "computer") computerRate++;

    renderPlayer(PLAYER_ELECTION, PLAYER);
    renderPlayer(COMPUTER_ELECTION, COMPUTER);
    renderStats(rounds, playerRate, computerRate);
    WINNER.textContent = MESSAGE;
  }
  defineWinner(playerRate, computerRate);
}

function renderStats(rounds, playerRate, computerRate) {
  ROUND.textContent = rounds;
  PLAYER_WINS.textContent = playerRate;
  COMPUTER_WINS.textContent = computerRate;
}

function isValidOption(option) {
  return !OPTIONS.includes(option);
}

function capturePlayer() {
  const PLAYER = prompt("Rock, Paper or Scissors?");
  if (PLAYER != null) PLAYER.toLowerCase();
  return PLAYER;
}

function renderPlayer(player, playerElection) {
  player.textContent =
    playerElection.charAt(0).toUpperCase() + playerElection.slice(1);
}

function defineWinner(playerWins, computerWins) {
  let winner = "";
  if (playerWins > computerWins) winner = "PLAYER WON!";
  else if (playerWins < computerWins) winner = "COMPUTER WON!";
  else winner = "DROW!";
  WINNER.textContent = winner;
}
