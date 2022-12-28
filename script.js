window.onload = function () {
    var tens = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var updatedTens = document.getElementById("ten");
    var updatedSeconds = document.getElementById("second");
    var updatedMinutes = document.getElementById("minute");
    var updatedHours = document.getElementById("hour");
    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    var resetButton = document.getElementById("reset");
    var intervalId;

    function startTimer () {
        tens++
        if (tens <= 9) {
            updatedTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            updatedTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++
            tens = 0;
            updatedTens.innerHTML = "00";
        }
        if (seconds <= 9) {
            updatedSeconds.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            updatedSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++
            seconds = 0;
            updatedSeconds.innerHTML = "00";
        }
        if (minutes <= 9) {
            updatedMinutes.innerHTML = "0" + minutes;
        }
        if (minutes > 9) {
            updatedMinutes.innerHTML = minutes;
        }
        if (minutes > 59) {
            hours++
            minutes = 0;
            updatedMinutes.innerHTML = "00"
        }
        if (hours <= 9) {
            updatedHours.innerHTML = "0" + hours;
        }
        if (hours > 9) {
            updatedHours.innerHTML = hours;
        }
    }

    startButton.onclick = function () {
        clearInterval(intervalId);
        intervalId = setInterval(startTimer, 10);
    }
    stopButton.onclick = function () {
        clearInterval(intervalId);
    }
    resetButton.onclick = function () {
        clearInterval(intervalId);
        tens = 0;
        seconds = 0;
        minutes = 0;
        updatedTens.innerHTML = "00";
        updatedSeconds.innerHTML = "00";
        updatedMinutes.innerHTML = "00";
    }
}