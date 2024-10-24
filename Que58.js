let n = +prompt("Enter number of element");
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = +prompt("enter number");
}
// let arr=[2,5,7,8]
console.log(arr);
let result = [];
for (let i = 0; i < arr.length; i++) {
  result[arr.length - i - 1] = arr[i];
}

console.log(result);
