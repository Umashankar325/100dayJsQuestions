let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
  str = "";
  for (let j = 1; j <= n; j++) {
    if (i == j) {
      str += "*";
    } else if (i + j ==  n+1 ) {
      str += "*";
    } else {
      str += "  ";
    }
  }
  console.log(str);
}
