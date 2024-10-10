console.log(
  "Write a program to take two inputs a, b & find the value of a  raised to the power of b. 	Ex - a = 2, b = 5	OP - 2^5 = 32"
);

let a = +prompt("enter a number  ");
let b = +prompt("enter b number ");
for (let i = 1; i < b; i++) {
  a += a;
}
console.log(a);
