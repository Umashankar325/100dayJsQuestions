console.log("Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)");

let p=+prompt("enter principal")
let r=+prompt("enter rate")
let n=+prompt("enter number of times the intrest is compound per year")
let t=+prompt("enter number of times ")

let amount=p*Math.pow((1+r/n),n*t)
console.log(amount);
let ci=amount-p;
console.log(ci);