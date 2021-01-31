const { isPlayerWinner } = require("./rock-paper-scissors");

test("isPlayer winner returns true if and only if first argument beats second argument in RPS", () => {
  expect(isPlayerWinner("rock", "rock")).toBe(false);
  expect(isPlayerWinner("rock", "paper")).toBe(false);
  expect(isPlayerWinner("rock", "scissors")).toBe(true);

  expect(isPlayerWinner("paper", "rock")).toBe(true);
  expect(isPlayerWinner("paper", "paper")).toBe(false);
  expect(isPlayerWinner("paper", "scissors")).toBe(false);

  expect(isPlayerWinner("scissors", "rock")).toBe(false);
  expect(isPlayerWinner("scissors", "paper")).toBe(true);
  expect(isPlayerWinner("scissors", "scissors")).toBe(false);
});
