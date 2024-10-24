let arr = [2, 6, 3, 22, 85, 33, 62, 77, 81];
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[max]) {
    max = i;
  }
  console.log(arr[i]);
}
console.log(`Max element = ${arr[max]} found at ${max} index`);
