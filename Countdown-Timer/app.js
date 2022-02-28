const daysEl = document.getElementById("days") 
const hoursEl = document.getElementById("hours") 
const minsEl = document.getElementById("mins") 
const secondsEl = document.getElementById("seconds") 

const newYears = "1 Jan 2023"

function countdown(){
    const newYear = new Date(newYears);
    const currentDate = new Date();

    const seconds = (newYear-currentDate)/1000;
    const day = Math.floor(seconds/3600/24);
    const hour = Math.floor(seconds/3600)%24;
    const min = Math.floor(seconds/60)%60;
    const second = Math.floor(seconds%60);
 
    daysEl.innerHTML = day.toString().padStart(2,"0");
    hoursEl.innerHTML = hour.toString().padStart(2,"0");
    minsEl.innerHTML = min.toString().padStart(2,"0");
    secondsEl.innerHTML = second.toString().padStart(2,"0");
}

//Inıtıal Call
countdown()

setInterval(countdown, 1000)