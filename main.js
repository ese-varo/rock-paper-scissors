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
  return OPTIONS[randomInt(3, true)];
}

function playerPlay() {
  return OPTIONS[randomInt(3, true)];
}

const randomInt = (num, includeZero = false) => {
  const result = Math.floor(Math.random() * Math.floor(num));
  return includeZero ? result : result + 1;
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
    const PLAYER = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (!OPTIONS.includes(PLAYER)) {
      i--;
      continue;
    }

    rounds++;
    const COMPUTER = computerPlay();

    ROUND.textContent = rounds;
    PLAYER_ELECTION.textContent =
      PLAYER.charAt(0).toUpperCase() + PLAYER.slice(1);
    COMPUTER_ELECTION.textContent =
      COMPUTER.charAt(0).toUpperCase() + COMPUTER.slice(1);

    const [message, winner] = round(COMPUTER, PLAYER);
    if (winner == "player") playerRate++;
    else if (winner == "computer") computerRate++;

    WINNER.textContent = message;
    PLAYER_WINS.textContent = playerRate;
    COMPUTER_WINS.textContent = computerRate;
  }
  defineWinner(playerRate, computerRate);
}

function defineWinner(playerWins, computerWins) {
  let winner = "";
  if (playerWins > computerWins) winner = "PLAYER WON!";
  else if (playerWins < computerWins) winner = "COMPUTER WON!";
  else winner = "DROW!";
  WINNER.textContent = winner;
}
