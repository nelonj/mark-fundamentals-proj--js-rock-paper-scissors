import { question as prompt } from 'readline-sync'

type RPSChoice = 'rock' | 'paper' | 'scissors'

const acceptableVariants: Record<RPSChoice, string[]> = {
  rock: ['rock', 'Rock', 'r', 'R'],
  paper: ['paper', 'Paper', 'p', 'P'],
  scissors: ['scissors', 'Scissors', 's', 'S']
}

const weaknesses: Record<RPSChoice, RPSChoice> = {
  rock: 'paper',
  paper: 'scissors',
  scissors: 'rock'
}

function playRound() {
  const randomIdx = Math.floor(Math.random() * 3)
  const computerChoice = Object.keys(acceptableVariants)[randomIdx] as RPSChoice
  const userChoice = getUserChoice()
  if (userChoice === computerChoice) {
    console.log(`You both chose ${computerChoice} - it's a draw!`)
  } else if (weaknesses[userChoice] === computerChoice) {
    console.log(`The computer's ${computerChoice} beat your ${userChoice}! Bad luck...`)
  } else {
    console.log(`Your ${userChoice} beat the computer's ${computerChoice}! You are a mighty champion!`)
  }
}

function getUserChoice(): RPSChoice {
  while (true) {
    const answer = prompt("Your choice: rock, paper or scissors? \n> ")
    for (let [choice, variants] of Object.entries(acceptableVariants)) {
      if (variants.includes(answer)) {
        return choice as RPSChoice
      }
    }
    console.log("Sorry, I don't recognise that as a choice! \n Please try 'rock', 'paper' or 'scissors' (without quotation marks).")
  }
}

playRound()