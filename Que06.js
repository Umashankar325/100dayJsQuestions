console.log("Accept two numbers from user and part 1-swap their values   Part 2 - Swap without using third variable");

// // part 01
// let num1=+prompt("enter first number");
// let num2=+prompt("enter second number");
// let temp=num1;
// num1=num2;
// num2=temp;
// console.log(`the value of num1 is ${num1} and the value of num2 is ${num2}`);


// part 02
let num1=+prompt("enter first number");
let num2=+prompt("enter second number");
 num1=num1+num2;
 num2=num1-num2;
 num1=num1-num2;
console.log(`the value of num1 is ${num1} and the value of num2 is ${num2}`);