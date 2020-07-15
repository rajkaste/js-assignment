

function input(){
  var name = window. prompt("Enter your name: ");
  console.log("Your name is " + name);
}



function checkAge(){
 var age = window. prompt("Are you 21+: ");
if (age > 21){
    console.log("Received age: " + age + ", Can Drink");
}
else{
 console.log("Received age: " + age + ", Cannot Drink");
}
}

document.querySelector(".one").addEventListener("click",input);
document.querySelector(".two").addEventListener("click",checkAge);
