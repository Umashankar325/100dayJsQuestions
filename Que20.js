console.log("Shop discount - Description on Graphic");
// let if customer purches less then 1000 get 10% discount
// let if customer purches more then 1000 and less then 10000 get 20% discount
// let if customer purches more then 10000 get 25% discount
let amount=+prompt("total amount of shoping ")
if (amount<1000) {
  amount=amount-((1/10)*amount);
} else if(amount>1000 && amount<10000) {
  amount=amount-((2/10)*amount);
}else{
  amount=amount-((25/100)*amount);
}
console.log(amount);
