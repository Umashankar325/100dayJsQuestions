let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

do {
  guess = +(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (guess > randomNumber) {
    console.log("Too high, try again.");
  } else if (guess < randomNumber) {
    console.log("Too low, try again.");
  } else if (guess === randomNumber) {
    console.log(
      `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`
    );
  } else {
    console.log("Please enter a valid number.");
  }
} while (guess !== randomNumber);
