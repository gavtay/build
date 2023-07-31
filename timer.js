// Changing the start / stop button status whcih tracks if timer is
// running or not
document.addEventListener('DOMContentLoaded', () => {
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
        

    }


});