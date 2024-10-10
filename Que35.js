console.log("Sum of digits of a number, 936 = 18");
let n = +prompt("enter  number  ");
console.log(n);
let sum=0;
while (n>0) {
  let digit=n%10;
  sum+=digit;
  n=Math.floor(n/10)
  
}
console.log(sum);

