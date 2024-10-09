console.log("Accept a year and check if it a leap year or not (google to find out what's a leap year)");
let year =+prompt("enter year to cheak leap year")
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}