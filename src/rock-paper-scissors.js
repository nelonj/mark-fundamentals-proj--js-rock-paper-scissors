// loading a function from an external dependency
const prompt = require("readline-sync").question;

const acceptableVariants = {
  rock: ["rock", "Rock", "r", "R"],
  paper: ["paper", "Paper", "p", "P"],
  scissors: ["scissors", "Scissors", "s", "S"],
};

function asStandardChoice(inputStr) {
  /** An nested array: array of array of strings */
  const arrayOfVariantArrays = Object.values(acceptableVariants);

  // alternative `for ... of ...` loop syntax - great for arrays
  for (let variantArray of arrayOfVariantArrays) {
    if (variantArray.includes(inputStr)) {
      return variantArray[0];
    }
  }
}

function declareWinner(userPick, computerPick) {
  const resultMessage = makeResultMessage(userPick, computerPick);
  console.log(resultMessage);
}

/**
 * Check if the first choice beats the second choice
 */
function isWinningChoice(firstChoice, secondChoice) {
  const weaknesses = {
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };
  return weaknesses[secondChoice] === firstChoice;
}

function getUserChoice() {
  while (true) {
    const answer = prompt("Your choice: rock, paper or scissors? \n> ");
    const standardisedChoice = asStandardChoice(answer);
    if (standardisedChoice) {
      // if choice can be standardised, we can exit out of the while loop with a return of the standardisd choice
      return standardisedChoice;
    } else {
      // otherwise, log a helpful message and continue the while loop
      console.log(
        "Sorry, I don't recognise that as a choice! \nPlease try 'rock', 'paper' or 'scissors' (without quotation marks)."
      );
    }
  }
}

function makeResultMessage(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return `You both chose ${computerChoice} - it's a draw!`;
  } else if (isWinningChoice(userChoice, computerChoice)) {
    return `Your ${userChoice} beat the computer's ${computerChoice}! You are a mighty champion!`;
  } else {
    return `The computer's ${computerChoice} beat your ${userChoice}! Bad luck...`;
  }
}

function playRound() {
  const computerChoice = randomPick();
  const userChoice = getUserChoice();
  declareWinner(userChoice, computerChoice);
}

function randomPick() {
  const choiceOptions = Object.keys(acceptableVariants);
  const randomIndex = Math.floor(Math.random() * choiceOptions.length);
  const computerChoice = choiceOptions[randomIndex];
  return computerChoice;
}

module.exports = {
  asStandardChoice,
  isWinningChoice,
  makeResultMessage,
  playRound,
};
