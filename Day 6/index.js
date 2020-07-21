//Question 1
function disco(){
    let arrColor = ['Red', 'Blue', 'Yellow', 'Skyblue'];
 
    function changeBg() {
        const arrColorLength = arrColor.length;
        let random = Math.trunc(Math.random() * arrColorLength);
        console.log(arrColor[random]);
        document.body.style.backgroundColor = arrColor[random];
    }

    setInterval(changeBg, 5000);
}
document.querySelector('.one').addEventListener("click",disco);




function tables() {
    let show = document.querySelector('#tables');
        var i = 0;
        var n = prompt("enter a number:")

        for (i = 1; i <= 10; i++) {
            document.write('<table border="1" cellspacing="0">');
            for (i = 1; i <= 10; i++) {
                document.write("<tr><td>" + n + " x " + i + " = " + n * i + "</td></tr>");
            }
            document.write("</table> <br> <h2>Press F5 to go back</h2>");
        }    
}
document.querySelector('.two').addEventListener("click", tables);


function third(){
    let userName = prompt("Enter The Name:- ");  //User Input

    let bodyBg = document.getElementById('bodyBg');
    let h3Name = document.getElementById('h3name');
    let h3Clock = document.getElementById('clock');
    let btn = document.getElementById('btn');

    h3Name.innerHTML = `Welcome ${userName}.`;  //Display User Name
    btn.innerHTML= `Mode Switch Enabled.`;
    btn.onclick = () => {                          //Dark Mode
        bodyBg.classList.toggle('bg');
    }


    function clock() {           //Clock
        let date = new Date();
        let time = date.toLocaleTimeString();
        h3Clock.innerText = time;
    }
    setInterval(clock, 1000)  //Live Clock
}

document.querySelector('.three').addEventListener("click", third);
