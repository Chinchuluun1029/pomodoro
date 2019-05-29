let DEFAULT_TIME = 1500;
let time = DEFAULT_TIME;
let pausedTime = 0;

let startButton = document.getElementById("startButton");
let answer = document.getElementById("answer");
let answerSubmit = document.getElementById("answerSubmit");
let stopButton = document.getElementById("stopButton");
let breakTime = document.getElementById("breakTime");




let minute = time / 60;
let second = time % 60;

if (second < 10 && second >= 0) {
    second = "0" + second;
}

let timer = (minute.toFixed(0) + second);

document.getElementById("timer").innerHTML = timer;

let isStopped = false;
isFinished = false;


answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { //"Enter" key
        event.preventDefault();
        answerSubmit.innerHTML = document.getElementById("answer").value;
        answer.style.display = "none";
    }
});

let interval;
let turn = 0;

let buttonClick = 0;
startButton.innerHTML = "Start";

function startBreak() {
    breakTime.innerHTML = "Break Time";
    clearInterval(interval);
    startTimer();
}


function startTimer(givenTime = DEFAULT_TIME) {
    interval = setInterval(function () {
        if (givenTime == 0) {
            if (turn % 2 == 0) {
                startBreak();
                ++turn;
            } else {
                breakTime.innerHTML = "Grind Time";
                clearInterval(interval);
                startTimer();
                ++turn;
            }
        } else {
            showTimer(--givenTime);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

startButton.addEventListener("click", function () {
    ++buttonClick;
    if (buttonClick % 2 == 1) {
        startTimer();
        startButton.innerHTML = "Stop";
    } else {
        breakTime.innerHTML = "Prime Time";
        showTimer(DEFAULT_TIME);
        stopTimer();
        startButton.innerHTML = "Restart";
    }
})

function showTimer(givenTime) {
    if (givenTime > 0) {
        minute = parseInt(givenTime / 60);
        second = givenTime % 60;

        if (second < 10 && second >= 0) {
            second = "0" + second;
        }
        if (minute < 10 && minute >= 0) {
            minute = "0" + minute;
        }

        let timer = (minute + "" + second);
        document.getElementById("timer").innerHTML = timer;
        document.getElementById("timerTitle").innerHTML = (minute + ":" + second);
    }
}
