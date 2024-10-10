console.log("Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776");

let num = 25;
let copy = num;
let sqr = num * num;
let digit = 0;

while (num > 0) {
  num = Math.floor(num / 10);
  digit++;
}
let reminder = Math.floor(sqr % 10 ** digit);

if (reminder == copy) {
  console.log(`given number ${copy} is Automorphic number`);
} else {
  console.log(`No, given number ${copy} is not a Automorphic number`);
}
