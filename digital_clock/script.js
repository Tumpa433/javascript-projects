function updateClock(){
    const clock = document.getElementById("time");

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // convert to 12-hour format
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours =hours%12;
    hours = hours ? hours : 12; // 0 become 12

    // Add 0
    hours = hours < 10 ? "0"+hours:hours;
    minutes = minutes < 10 ? "0"+minutes:minutes;
    seconds = seconds < 10 ? "0"+seconds:seconds;

    //set text
    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// call function every second
setInterval(updateClock,1000);
updateClock(); // call once immediately