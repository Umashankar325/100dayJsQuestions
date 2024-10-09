console.log("Accept the three sides of triangle and calculate the area using herons formula");

let p=+prompt("enter first side of trangle ")
let q=+prompt("enter second side of trangle")
let r=+prompt("enter thard  side of trangle")
let s=(p+q+r)/2;
let aria=Math.sqrt(s*(s-p)*(s-q)*(s-r));
console.log(`aria of trangle is ${aria}`);
