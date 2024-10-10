console.log("Print the sum of all even & odd numbers in a range seperately.");
let n = prompt("enter number to sum of all even & odd numbers in a range seperately. ");
let even=0;
let odd=0;
for (let i = 1; i <= n; i++) {
if (i%2==0) {
  even+=i;
} else {
  odd+=i;
}
}
console.log(`sum of even number is ${even}`);
console.log(`sum of odd number is ${odd}`);
