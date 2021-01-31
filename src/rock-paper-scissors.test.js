const { isWinningChoice } = require("./rock-paper-scissors");

test("isWinningChoice returns true if and only if first argument beats second argument in RPS", () => {
  expect(isWinningChoice("rock", "rock")).toBe(false);
  expect(isWinningChoice("rock", "paper")).toBe(false);
  expect(isWinningChoice("rock", "scissors")).toBe(true);

  expect(isWinningChoice("paper", "rock")).toBe(true);
  expect(isWinningChoice("paper", "paper")).toBe(false);
  expect(isWinningChoice("paper", "scissors")).toBe(false);

  expect(isWinningChoice("scissors", "rock")).toBe(false);
  expect(isWinningChoice("scissors", "paper")).toBe(true);
  expect(isWinningChoice("scissors", "scissors")).toBe(false);
});
