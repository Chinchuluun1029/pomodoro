let DEFAULT_TIME = 1500;
let time = DEFAULT_TIME;
let pausedTime = 0;

let startButton = document.getElementById("startButton");
let answer = document.getElementById("answer");
let answerSubmit = document.getElementById("answerSubmit");




let minute = time / 60;
let second = time % 60;

if (second < 10 && second >= 0) {
    second = "0" + second;
}

let timer = (minute.toFixed(0) + second);

document.getElementById("timer").innerHTML = timer;

let isStopped = false;
isFinished = false;

// let decrementTime = function () {
    

//     if (time > 0 && !isStopped) {
//         --time;
//         minute = Math.floor(time / 60);
//         second = time % 60;

//         if (second < 10 && second >= 0) {
//             second = "0" + second;
//         }

//         timer = (minute.toFixed(0) + "" + second);
//         document.getElementById("timer").innerHTML = timer;
//         document.getElementById("timerTitle").innerHTML = (minute.toFixed(0) + ":" + second);

//     }
//     if (time == 0) {
//         isFinished = true;
//         console.log("finished!");
//         return;
//     }

// };

answer.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) { //"Enter" key
        event.preventDefault();
        console.log("Enter pressed");
        answerSubmit.innerHTML = "Stop fucking lying";
    }
});



    // var t = null; /* Our timeout ID */
	// var startTimeout = new Date(); /* When the timer starts */
	// var timeLeft = 0; /* How much time is left */
	// var timeDelay = 10000; /* How long the timer should be */

	// function startTimer() {
	// 	/* Replace the "alert" below with the actual code
	// 	   that should be executed at the end of the timer */
	// 	alert( 'You reached the end of your time limit' );

	// 	/* Figure out when you're starting the new timer */
	// 	startTimeout = new Date();

	// 	/* Set the timer to perform the action again */
	// 	t = setTimeout( startTimer, timeDelay );
	// }
	// function pauseTimeout() {
	// 	/* Instantiate the timeLeft variable to be the same as
	// 	   the amount of time the timer initially had */
	// 	timeLeft = timeDelay;

	// 	/* Subtract the timestamp at which the timer started from
	// 	   the current time, then subtract that amount of milliseconds
	// 	   from the initial amount of time the timer should have run */
	// 	timeLeft -= new Date() - startTimeout;

	// 	/* Clear the timer */
	// 	clearTimeout( t );
	// }
	// function resumeTimeout() {
	// 	/* If the timeLeft variable is empty or doesn't exist,
	// 	   we simply set it to the timeDelay var */
	// 	if( !timeLeft ) { timeLeft = timeDelay; }

	// 	/* Start the timer again, this time using the timeLeft
	// 	   variable instead of the timeDelay variable */
	// 	t = setTimeout( fadeNext, timeLeft );
    // }
    


let isRunning = false;
let interval;
function pauseTimer() {
    isRunning = false;
}
function resumeTimer() {
    startTimer(time);
}



let buttonClick = 0;
startButton.innerHTML = "Start";

startButton.addEventListener("click", function () {
    ++buttonClick;
})

//TODO: fix button click to work alongside setInterval
if (buttonClick == 0) {

} else if (buttonClick % 2 == 0) {
    isStopped = true;
    pausedTime = time;
    startButton.innerHTML = "Continue";
} else {
    isStopped = false;
    startButton.innerHTML = "Stop";
}


function startTimer(givenTime = DEFAULT_TIME) {
    isRunning = true;

    interval = setInterval(function () {
        if (isRunning) {
            --givenTime;
        } else {
            clearInterval(interval);
            console.log("Left time:", givenTime);
            time = givenTime;
        }
        showTimer(givenTime);
        console.log("Running");
    }, 1000);
}

function showTimer(givenTime) {
    if (givenTime > 0) {
        minute = parseInt(givenTime / 60);
        second = givenTime % 60;

        if (second < 10 && second >= 0) {
            second = "0" + second;
        }

        timer = (minute.toFixed(0) + "" + second);
        document.getElementById("timer").innerHTML = timer;
        document.getElementById("timerTitle").innerHTML = (minute.toFixed(0) + ":" + second);
        --time;
    }
}
