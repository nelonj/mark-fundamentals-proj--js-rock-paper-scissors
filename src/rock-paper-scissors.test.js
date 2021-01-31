const { asStandardChoice, isWinningChoice } = require("./rock-paper-scissors");

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

test("asStandardChoice returns a standardised choice version of a string", () => {
  expect(asStandardChoice("rock")).toBe("rock");
  expect(asStandardChoice("Rock")).toBe("rock");
  expect(asStandardChoice("r")).toBe("rock");
  expect(asStandardChoice("R")).toBe("rock");

  expect(asStandardChoice("paper")).toBe("paper");
  expect(asStandardChoice("Paper")).toBe("paper");
  expect(asStandardChoice("p")).toBe("paper");
  expect(asStandardChoice("P")).toBe("paper");

  expect(asStandardChoice("scissors")).toBe("scissors");
  expect(asStandardChoice("Scissors")).toBe("scissors");
  expect(asStandardChoice("s")).toBe("scissors");
  expect(asStandardChoice("S")).toBe("scissors");
});
