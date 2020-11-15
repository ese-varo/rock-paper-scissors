const options = ["paper", "rock", "scissors"];

const combinations = {
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

function computerPlay() {
  return options[randomInt(3, true)];
}

function playerPlay() {
  return options[randomInt(3, true)];
}

const randomInt = (num, includeZero = false) => {
  const result = Math.floor(Math.random() * Math.floor(num));
  return includeZero ? result : result + 1;
};

function round(computerSelection, playerSelection) {
  if (computerSelection == playerSelection) return "Drow! nobody wins";

  let result = "";
  if (combinations[computerSelection][playerSelection] == "wins") {
    result += `Computer wins! ${computerSelection} wins over ${playerSelection}`;
  } else
    result += `Player wins! ${playerSelection} wins over ${computerSelection}`;
  return result;
}

const player = playerPlay();
const computer = computerPlay();

console.log(`Computer: ${computer}, Player: ${player}`);
console.log(round(computer, player));
