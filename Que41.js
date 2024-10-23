let choice;
let num1, num2, result;

do {
  choice = parseInt(
    prompt(`Simple Calculator
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit

Enter your choice (1-5):`)
  );

  if (choice >= 1 && choice <= 4) {
    num1 = parseFloat(prompt("Enter the first number:"));
    num2 = parseFloat(prompt("Enter the second number:"));
  }

  switch (choice) {
    case 1:
      result = num1 + num2;
      alert("Result: " + result);
      break;
    case 2:
      result = num1 - num2;
      alert("Result: " + result);
      break;
    case 3:
      result = num1 * num2;
      alert("Result: " + result);
      break;
    case 4:
      if (num2 !== 0) {
        result = num1 / num2;
        alert("Result: " + result);
      } else {
        alert("Cannot divide by zero!");
      }
      break;
    case 5:
      alert("Exiting the calculator.");
      break;
    default:
      alert("Invalid choice! Please select a valid option.");
  }
} while (choice !== 5);
