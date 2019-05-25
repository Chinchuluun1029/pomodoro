
let DEFAULT_TIME = 1500;
let time = DEFAULT_TIME;


document.getElementById("continueButton").style.display = "none";

let minute = time / 60;
let second = time % 60;

if (second < 10 && second >= 0) {
    second = "0" + second;
}

let timer = (minute.toFixed(0) + ":" + second);

document.getElementById("timer").innerHTML = timer;

let isStopped = false;
let isRunning = false;

let decrementTime = function decrement() {
    if (time > 0 && !isStopped) {
        --time;
        minute = Math.floor(time / 60);
        second = time % 60;

        if (second < 10 && second >= 0) {
            second = "0" + second;
        }

        timer = (minute.toFixed(0) + ":" + second);
        document.getElementById("timer").innerHTML = timer;

        document.getElementById("startButton").style.display = "none";

        isRunning = true;
    } 
}

function stop() {
    if(isRunning) {
        isStopped = true;
        document.getElementById("continueButton").style.display = "initial";
    }
}


function resetTime() {
    time = DEFAULT_TIME;
}

function continueTime() {
    if(!isRunning) {

    }
}

//make start to continue on right condition
//make pause function, '
//make stop right function, ending completely and restarting
