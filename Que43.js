let alphabet = prompt("Enter an alphabet:").toLowerCase();

switch (alphabet) {
  case "a":
    console.log(`${alphabet} is a vowel.`);
    break;
  case "e":
    console.log(`${alphabet} is a vowel.`);
    break;
  case "i":
    console.log(`${alphabet} is a vowel.`);
    break;
  case "o":
    console.log(`${alphabet} is a vowel.`);
    break;
  case "u":
    console.log(`${alphabet} is a vowel.`);
    break;
  default:
    if (alphabet >= "a" && alphabet <= "z") {
      console.log(`${alphabet} is a consonant.`);
    } else {
      console.log("Invalid input! Please enter an English alphabet.");
    }
}
