console.log("Check if the number is Prime or not.");
let n = prompt("enter number to Check if the number is Prime or not ");
let flag = 0;

for (let i = 2; i <= n / 2; i++) {
  if (n % i == 0) {
    flag = 1;
    break;
  }
}
if (flag == 0) {
  console.log(`given number ${n} is  Prime`);
} else {
  console.log(`given number ${n} is non Prime`);
}
