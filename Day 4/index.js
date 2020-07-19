//Question 1
function fizzBuzz() {
  var output = [];
  var count = 1;
  while (count <= 100) {

    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(count);
    }
    count++;
  }
  console.log(output);
}
document.querySelector(".one").addEventListener("click", fizzBuzz);

//Question 2
function destObj(){
const student = {
  name: "Helsinki",
  age : 24,
  projects : {
    diceGame : "Two player dice game using Javascript"
  }
};
//Object Destructuring
const {name,age,projects:{diceGame}} = student;
console.log("",name,"\n",age,"\n",diceGame);
}
document.querySelector(".two").addEventListener("click", destObj);

//Question 3
function shopping(){
 let shoppingList = ['orea','monaco','parle-g','50-50','krack jack'];
 console.log(shoppingList);
 //Spread Operator
let shoppingBasket = [...shoppingList];
 // let shoppingBasket = Array.from(shoppingList);
 shoppingBasket.push('milk','ice cream','bread');
 console.log(shoppingBasket);
}
document.querySelector(".three").addEventListener("click", shopping);

//Question 4
function cal(){
        let choice = parseInt(prompt(`Select an Operation you want to perform(1/2/3/4/5/6):\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Mod\n6. Square Root`));
        // console.log(+choice);

        switch (choice){
        case 1:
        var num1 = parseInt(prompt(`Enter First Number: `));
        var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} plus ${num2} is ` + (num1 + num2) + ".");
        break;

        case 2:
        var num1 = parseInt(prompt(`Enter First Number: `));
        var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} minus ${num2} is ` + (num1 - num2) + ".");
        break;

        case 3:
        var num1 = parseInt(prompt(`Enter First Number: `));
        var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} into ${num2} is ` + (num1 * num2) + ".");
        break;

        case 4:
        var num1 = parseInt(prompt(`Enter First Number: `));
        var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} divided by ${num2} is ` + (num1 / num2) + ".");
        break;

        case 5:
        var num1 = parseInt(prompt(`Enter First Number: `));
        var num2 = parseInt(prompt(`Enter Second Number: `));
            console.log(`${num1} mod ${num2} is ` + (num1 % num2) + ".");
        break;

        case 6:
            let num = parseInt(prompt("Enter a number: "));
            console.log(`Square Root of ${num} is ` + Math.sqrt(num) + ".");
        break;

        default:
        console.log("Enter Valid Choice!")
}
}
document.querySelector(".four").addEventListener("click", cal);

//Question 5
function rewardEmp(){
let sales = Number(prompt("Enter the Sales: "));
let commission,commissionPercent;

if(sales > 0 && sales <= 5000){
  commissionPercent = 2;
  commission = sales * (commissionPercent/100);
}
else if(sales > 5000 && sales <= 10000) {
  commissionPercent = 5;
  commission = sales * (commissionPercent/100);
}
else if(sales > 10000 && sales <= 20000) {
  commissionPercent = 7;
  commission = sales * (commissionPercent/100);
}
else if(sales > 20000) {
  commissionPercent = 10;
  commission = sales * (commissionPercent/100);
}
else {
  alert("Invalid Input");
}
console.log(`As per your Total Sales: ${sales},
Your ${commissionPercent}% commission is ${commission}.`);
}
document.querySelector(".five").addEventListener("click", rewardEmp);

//Question 6
function askNum(){
let input = parseInt(prompt("Enter a Number: "));
return (isNaN(input) || input <= 100) ? askNum() : console.log(`Number Entered: ${input}, is greater than 100.`);
}
document.querySelector(".six").addEventListener("click", askNum);

//Question 7
function prime(){
  let n = Number(prompt("Enter a Number: "));
  console.log(`Prime Numbers till ${n}:\n`);
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  console.log(i); // a prime
}
}
document.querySelector(".seven").addEventListener("click", prime);

//Question 8
function arrow(){
function ask(question, yes, no){
  if (confirm(question)) yes()
  else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You cancelled the execution.")
);

}
document.querySelector(".eight").addEventListener("click", arrow);
