console.log("Accept a number and print its reverse");
let n = +prompt("enter  number  ");
console.log(n);
let newnum=0;
while (n>0) {
  let digit=n%10;
  newnum=(newnum*10)+digit
  n=Math.floor(n/10)
  
}
console.log(newnum);
