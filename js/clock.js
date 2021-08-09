const clock = document.getElementById("clock");

function makeClock () {

    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    
    clock.innerText = `${hour < 10 ? `0${hour}` : hour }:${minute < 10 ? `0${minute}` : minute }:${second < 10? `0${second}` : second} `;
}
makeClock();
setInterval(makeClock, 1000);
