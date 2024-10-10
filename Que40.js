console.log("Print hello until user gives wrong input using do while");
let input = +prompt("enter number between 1 to 10");

let num = Math.random();
let ne = Math.floor(num * 10 + 1);

while (ne != input) {

  console.log("hellow");
  console.log(`input value is ${input} instand of ${ne}`);
  input = +prompt("enter number between 1 to 10");

  num = Math.random();
  ne = Math.floor(num * 10 + 1);
}
