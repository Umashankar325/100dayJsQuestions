let n = 5;
let num;
for (let i = 1; i <= n; i++) {
  num = 0;
  for (let j = 1; j <= i; j++) {
    num = 10 * num + j;
  }
  console.log(num);
}
