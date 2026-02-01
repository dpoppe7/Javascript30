const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.classList.add('second-hand');

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;
    minHand.classList.add('min-hand');

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    hourHand.classList.add('hour-hand');

    // remove transition when hand is at 0 and add it back when it's not
    secondHand.style.transition = (seconds === 0) ? 'none' : '';
    minHand.style.transition = (mins === 0) ? 'none' : '';
    hourHand.style.transition = (hours === 0) ? 'none' : '';
}
setInterval(setDate, 1000); // Call setDate every second

function setClockNums(){
    const clockFace = document.querySelector('.clock-face');
    const radius = 47;
    
    for(let i = 1; i <= 12; i++){
        const num = document.createElement('div');
        num.classList.add('num');
        num.innerHTML = i;
        const angle = ((i - 3)*30) * (Math.PI / 180); //radiants
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        num.style.left = `${x}%`;
        num.style.top = `${y}%`;
        clockFace.appendChild(num);
    }
}
setClockNums();