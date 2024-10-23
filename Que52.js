let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  str = "";
  for (let j = 1; j <= 2 * n; j++) {
    if (i == j && j <= n) {
      str += "*";
    } else if (i + j == 2 * n && j > n) {
      str += "*";
    } else {
      str += "  ";
    }
  }
  console.log(str);
}
