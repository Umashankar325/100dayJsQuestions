console.log("Bijli bill - Description on Graphic");

let units = +prompt("total unit used ");
let amount = 0;
if (units <= 100) {
  amount = units * 10;
} else if (units > 100 && units <= 200) {
  amount = units * 15;
} else if (units > 200 && units <= 300) {
  amount = units * 15;
} else {
  amount = units * 25;
}
console.log(amount);
