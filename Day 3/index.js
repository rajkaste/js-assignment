//Question 1
function evenOdd(){

   var num = window.prompt("The number entered is : ");

   if (num % 2 == 0){
     console.log(`Number entered is ${num} and it's Even`);
 }
 else{
  console.log(`Number entered is ${num} and it's Odd`);
 }
 }

//Question 2
 function checkString(){
   const originalString = window.prompt("Enter OS and its Version(give space in between): ");

   // Split string by whitespace character
   const splitString = originalString.split(" ");

   console.log(`The OS name is ${splitString[0]} and version is ${splitString[1]}.`);
 }


//Question 3
 //1. with Conditional Statement
function withCon(){

  let marks=prompt("Enter the Marks to check");
        console.log(marks);

        if(marks>=85)
             console.log(`Marks are ${marks} and Grade is A`);
        else if(marks<85 & marks>=75)
            console.log(`Marks are ${marks} and Grade is B`);
        else if(marks<75 & marks>=65)
             console.log(`Marks are ${marks} and Grade is C`);
        else if(marks<65 & marks>=55)
             console.log(`Marks are ${marks} and Grade is D`);
        else if(marks<55 & marks>=45)
              console.log(`Marks are ${marks} and Grade is E`);
        else if(marks<45 & marks<=45)
              console.log(`Marks are ${marks} and Grade is F`);

}

//2. with Swith Case

function withSwitch(){

        console.log("Using Switch Case : ")
        let marks1= parseInt(prompt("Enter the Marks to check using switch case"));
        console.log(marks1);


        switch (true){
        case marks1<45:
        console.log(`Marks are ${marks1} and Grade is F`);
        break;

        case marks1<55:
        console.log(`Marks are ${marks1} and Grade is E`);
        break;

        case marks1<65:
        console.log(`Marks are ${marks1} and Grade is D`);
        break;

        case marks1<75:
        console.log(`Marks are ${marks1} and Grade is C`);
        break;

        case marks1<=85:
        console.log(`Marks are ${marks1} and Grade is B`);
        break;

        case marks1<=100:
        console.log(`Marks are ${marks1} and Grade is A`);
        break;


        default:
        console.log("Enter Valid Marks")
}
}

document.querySelector(".one").addEventListener("click",evenOdd);
document.querySelector(".two").addEventListener("click",checkString);
document.querySelector(".threeif").addEventListener("click",withCon);
document.querySelector(".threeswitch").addEventListener("click",withSwitch);
