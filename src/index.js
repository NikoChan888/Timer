import {sayHello} from "./sayHello.js";
import {checkClock} from "./checkClock.js";
const timerBtn=document.getElementById("timer");
let secondLeft=1500;
let timerInterval;
sayHello()

function displayTime(){
document.getElementById("clock").innerText=checkClock();
}

function startTimer(){
    console.log("start Timer!!");
    clearInterval(timerInterval);
    setInterval(displayCountdown,1000);    
}

function displayCountdown(){
    document.getElementById("countDown").innerText=Number.parseInt(secondLeft/60)+"Min"+secondLeft%60+"Sec";
    secondLeft=secondLeft-1;
}

setInterval(displayTime, 1000);

timerBtn.onclick = startTimer;