let arr = [2, 96, 3, 22, 33, 62, 77, 81];
let max = 0;
let secondmax = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[max]) {
    max = i;
  }
  if (arr[i] > arr[secondmax] && arr[i] < arr[max]) {
    secondmax = i;
  }
  console.log(`ittration ${i}`);
}
console.log(`Max element = ${arr[max]} found at ${max} index`);
console.log(
  `secondmax element = ${arr[secondmax]} found at ${secondmax} index`
);
