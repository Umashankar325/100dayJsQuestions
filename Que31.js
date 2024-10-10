console.log("Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43");
let n = prompt("enter number to find its factors for sum");
let sum=0;
for (let i = 1; i <= n/2; i++) {
if (n%i==0) {
  
  sum+=i;
}
}
console.log(sum);

