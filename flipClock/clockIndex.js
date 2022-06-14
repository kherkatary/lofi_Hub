

function hClock() {
    let date = new Date();
    let h = date.getHours();
    let period = "AM";

    //for 24 to 12 hour conversion
    if (h > 12) {
        h = h - 12;
        period = "PM";
    }

    else if (h == 0) {
        h = 12;
    }
    else { h == h; }

    //for single digit number to be printed with zero , eg 01:30:10

    h = h < 10 ? `0${h}` : h;

    document.getElementById("hour").innerText = h;
    document.getElementById("period").innerText= period;

}

function mClock() {
    let date = new Date();
    let min = date.getMinutes();

    //for single digit number to be printed with zero , eg 11:08:10
    min = min < 10 ? `0${min}` : min;

    document.getElementById("minute").innerText = min;
}


function sClock() {
    let clockSound= new Audio("clockSound.wav");
    clockSound.play();


    let date = new Date();
    let sec = date.getSeconds();

    //for single digit number to be printed with zero , eg 11:30:09
    sec = sec < 10 ? `0${sec}` : sec;

    document.getElementById("second").innerText = sec;

    
}


hClock();
mClock();
sClock();
setInterval(hClock,1000);
setInterval(mClock,1000);
setInterval(sClock,1000);


//backgrounds





