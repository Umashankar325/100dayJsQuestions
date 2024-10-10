console.log(" Seprate each digit of a number and print it on the new line ex - 123 	OP		3		2		1");
let n = +prompt("enter  number  ");
console.log(n);

while (n>0) {
  let digit=n%10;
  console.log(digit);
  n=Math.floor(n/10)
  
}