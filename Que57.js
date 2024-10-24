let arr = [2, 4, 16, 14, 18, 19];
let flag = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    flag = false;
  }
}
if (flag == true) {
  console.log("array is shorted");
} else {
  console.log("array is not shorted");
}
