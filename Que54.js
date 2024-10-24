let n = +prompt("Enter number of element");
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = +prompt("enter number");
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  console.log(arr[i]);
}
console.log(`sum of number of array is ${sum} and avrage is ${Math.floor(sum / n)} `);
