console.log(" Accept name and age from the user. Check if the user is a valid voter or not.      Vaid - Hello Shery, You are a valid voter.      Invalid - Sorry Shery, you can't cast the vote.	Part 2 - Print after how many years the user will be eligible");


// part 01
// let name=prompt("enter your name ");
// let age=+prompt("enter your age ");

// if (age>=18) {
//   console.log(`Hello ${name}, You are a valid voter.`);
  
// } else {
//   console.log(`Sorry ${name}, you can't cast the vote.`);
// }

// part 02
let name=prompt("enter your name ");
let age=+prompt("enter your age ");

if (age>=18) {
  console.log(`Hello ${name}, You are a valid voter.`);
  
} else {
  let remaining=18-age;
  console.log(`Sorry ${name}, you can't cast the vote.after ${remaining} years you will be eligible`);


}
