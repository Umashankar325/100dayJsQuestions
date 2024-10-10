console.log("Accept a number and check if it is a pallindromic number (If number and its reverse are equal)       Ex - 12321 - Rerverse - 12321");
let n = +prompt("enter  number  ");
let copy=n;
console.log(n);
let newnum=0;
while (n>0) {
  let digit=n%10;
  newnum=(newnum*10)+digit
  n=Math.floor(n/10)
  
}
if (copy==newnum) {
  console.log(`${copy}  is a pallindromic number`);
} else {
  console.log(`no, ${copy}  is not a pallindromic number`);
}

