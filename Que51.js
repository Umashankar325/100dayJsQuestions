let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  str = "";
  for (let j = 1; j <= n; j++) {
    if (j <= n - i) {
      str += "  ";
    } else {
      str += "  *";
    }
  }
  console.log(str);
}
