console.log(
  "Accept a number and check if it is a strong number or not (Sum of factorial of each digit)       Ex- 145 = 1! + 4! + 5! = 145"
);

let n = prompt("enter number to Check  if it is a strong number or not ");
let copy = n;
let sum = 0;
while (n > 0) {
  let digit = n % 10;
  n = Math.floor(n / 10);

  let factorial = 1;
  for (let i = 1; i <= digit; i++) {
    factorial *= i;
  }
  sum += factorial;
}

if (copy == sum) {
  console.log(`${copy}  is a strong number`);
} else {
  console.log(`no, ${copy}  is not a strong number`);
}
