// Changing the start / stop button status whcih tracks if timer is
// running or not
document.addEventListener('DOMContentLoaded', function() {
    const startStopStatus = document.querySelector('#start-stop-button');
    startStopStatus.addEventListener('click', toggleTimer);

    // default is running to false
    let isRunning = false;
    let intervalId;

    function toggleTimer() {
        // timer is default on pause

        // if the timer is running and STOP button is pressed change
        // text content to start since timer was paused
        if (isRunning) {
            clearInterval(intervalId);
            startStopStatus.textContent = 'START';
        } else {
            // if the timer is not running and the START button is
            // pressed then change text content to STOP since timer
            // was started
            intervalId = setInterval(updateTimer, 1000);
            startStopStatus.textContent = 'STOP';
        } 

        isRunning = !isRunning;
    }





    // timer logic here to decrement current time
    function updateTimer() {
        let hours = parseInt(timerDisplay.hrDisplay.textContent);
        let minutes = parseInt(timerDisplay.minDisplay.textContent);
        let seconds = parseInt(timerDisplay.secDisplay.textContent);

        if (hours === 0 && minutes === 0 && seconds === 0) {
            // If timer is at 0, change pause button to start, set
            // running status to false, clear interval
            clearInterval(intervalId);
            startStopStatus.textContent = 'START';
            isRunning = false;
            alert('Timer has ended!');
        } 
        else { 
            // else decrement timer
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    if (hours > 0) {
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    }
                }
            } 
                
        }

        hrDisplay.textContent = hours.toString().padStart(2, '0');
        minDisplay.textContent = minutes.toString().padStart(2, '0');
        secDisplay.textContent = seconds.toString().padStart(2, '0');
    }

});