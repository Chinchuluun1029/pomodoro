
let DEFAULT_TIME = 1500;
let time = DEFAULT_TIME;

let startButton = document.getElementById("startButton");
    // continueButton = document.getElementById("continueButton");
    // pauseButton = document.getElementById("pauseButton");
    // stopButton = document.getElementById("stopButton");
    // resetButton = document.getElementById("resetButton");

// continueButton.style.display = "none";

let buttonClick = 0;
startButton.innerHTML = "Start";

startButton.addEventListener("click", function() {
    ++buttonClick;
})


let minute = time / 60;
let second = time % 60;

if (second < 10 && second >= 0) {
    second = "0" + second;
}

let timer = (minute.toFixed(0) + ":" + second);

document.getElementById("timer").innerHTML = timer;

let isStopped = false;
    isFinished = false;

let decrementTime = setInterval(function() {
    if (buttonClick == 0) {
        isStopped = true;

    } else if (buttonClick % 2 == 0) {
        isStopped = true;
        startButton.innerHTML = "Continue";
    } else {
        isStopped = false;
        startButton.innerHTML = "Stop";
    }

    if (time > 0 && !isStopped) {
        --time;
        minute = Math.floor(time / 60);
        second = time % 60;

        if (second < 10 && second >= 0) {
            second = "0" + second;
        }

        timer = (minute.toFixed(0) + ":" + second);
        document.getElementById("timer").innerHTML = timer;

    }
    if (time == 0) {
        isFinished = true;
        console.log("finished!");
        return;
    }

    console.log("this is running");

}, 1000)

//make start to continue on right condition
//make pause function, '
//make stop right function, ending completely and restarting
