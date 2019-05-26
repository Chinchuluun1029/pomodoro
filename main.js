let DEFAULT_TIME = 1500;
let time = DEFAULT_TIME;

let startButton = document.getElementById("startButton");
let answer = document.getElementById("answer");
let answerSubmit = document.getElementById("answerSubmit");

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

let timer = (minute.toFixed(0) + second);

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

        timer = (minute.toFixed(0) + "" + second);
        document.getElementById("timer").innerHTML = timer;
        document.getElementById("timerTitle").innerHTML = (minute.toFixed(0) + ":" + second);

    }
    if (time == 0) {
        isFinished = true;
        console.log("finished!");
        return;
    }

    console.log("this is running");

}, 1000)

answer.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      console.log("Enter pressed");
      answerSubmit.innerHTML = "Stop fucking lying";
      // Trigger the button element with a click
    }
  });