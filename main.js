const options = ["paper", "rock", "scissors"];

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
  if (computerSelection == playerSelection) return "drow";

  if (computerSelection == "paper") {
    return playerSelection == "rock" ? "computer wins" : "player wins";
  } else if (computerSelection == "scissors") {
    return playerSelection == "paper" ? "computer wins" : "player wins";
  } else {
    return playerSelection == "scissors" ? "computer wins" : "player wins";
  }
}

const player = playerPlay();
const computer = computerPlay();

console.log(`Computer: ${computer}, Player: ${player}`);
console.log(round(computer, player));
