let n = 5;

for (let i = 1; i <= n; i++) {
  let rowString = "";
  let alphabet = 65;
  for (let j = 0; j < i; j++) {
    rowString += String.fromCharCode(alphabet + j) + " ";
  }
  console.log(rowString);
}
