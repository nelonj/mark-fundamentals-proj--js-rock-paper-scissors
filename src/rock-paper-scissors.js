// loading a function from an external dependency
const prompt = require("readline-sync").question;


// keys: [values] form an Object, which is equivalent to Python dictionary
const acceptableVariants = {
  rock: ["rock", "Rock", "r", "R"],
  paper: ["paper", "Paper", "p", "P"],
  scissors: ["scissors", "Scissors", "s", "S"],
};


// checking if user has inputted an acceptable Variant + returning the standardised lowercase name of the Variant
function asStandardChoice(inputStr) {
  /** An nested array: array of array of strings */
  const arrayOfVariantArrays = Object.values(acceptableVariants); // big array of 3 arrays of strings
  console.log(arrayOfVariantArrays);
  // alternative `for ... of ...` loop syntax - great for arrays
  for (let variantArray of arrayOfVariantArrays) { // chooses a smaller array, and iterates through a number of times equivalent to items of larger array
    if (variantArray.includes(inputStr)) {
      return variantArray[0];
    }
  }
}

// make a result message and print that
function declareWinner(userPick, computerPick) {
  const resultMessage = makeResultMessage(userPick, computerPick);
  console.log(resultMessage);
}

/**
 * Check if the first choice beats the second choice
 */
function isWinningChoice(userChoice, computerChoice) {
  const weaknesses = {  //an Object where values beat the keys
    rock: "paper",
    paper: "scissors",
    scissors: "rock",
  };
  // selects value, which is what will win over the computer's choice
  return weaknesses[computerChoice] === userChoice; //returns a boolean
}


// my choice (1st of 2 terminal outputs)
function getUserChoice() {
  // allows it to prompt again if I insert something that doesn't work + stops when i 'return' something that will terminate the function itself
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

// 2nd of 2 terminal outputs
function makeResultMessage(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return `You both chose ${computerChoice} - it's a draw!`;
  } else if (isWinningChoice(userChoice, computerChoice)) {
    return `Your ${userChoice} beat the computer's ${computerChoice}! You are a mighty champion!`;
  } else {
    return `The computer's ${computerChoice} beat your ${userChoice}! Bad luck...`;
  }
}


// computer's choice
function randomPick() {
  const choiceOptions = Object.keys(acceptableVariants);
  // multiply key length (3) by a decimal between 0 and 1, and then rounds it down. Doing the equivalent of defining a range in Python!
  // why always rounding down? couldn't I use Math.round()? to not bias possible outcomes.
  // Math: a group of functions
  const randomIndex = Math.floor(Math.random() * choiceOptions.length); // Math.floor() rounds down to lower number. Math.ranrom() picks random decimal number between 0 and 1
  const computerChoice = choiceOptions[randomIndex]; // array of R,P,S. Index result of random number generated
  return computerChoice;
}

// structures overarching game
function playRound() {
  const computerChoice = randomPick();
  const userChoice = getUserChoice();
  declareWinner(userChoice, computerChoice);
}


module.exports = {
  asStandardChoice,
  isWinningChoice,
  makeResultMessage,
  playRound,
};
