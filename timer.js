// Changing the start / stop button status which tracks if timer is
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
            console.log('Get ready')
            intervalId = setInterval(updateTimer, 1000);
            startStopStatus.textContent = 'STOP';
        } 

        isRunning = !isRunning;
    }





    // timer logic here to decrement current time
    function updateTimer() {
        console.log('In updateTimer function')
        const hrDisplayValue = document.getElementById('hr-display');
        const minDisplayValue = document.getElementById('min-display');
        const secDisplayValue = document.getElementById('sec-display');

        let hours = parseInt(hrDisplayValue.textContent);
        let minutes = parseInt(minDisplayValue.textContent);
        let seconds = parseInt(secDisplayValue.textContent);

        if (hours === 0 && minutes === 0 && seconds === 0) {
            // If timer is at 0, change pause button to start, set
            // running status to false, clear interval
            clearInterval(intervalId);
            startStopStatus.textContent = 'START';
            isRunning = false;
            alert('Timer has ended!');
            console.log('Checked if timer is at 0');
        } 
        else { 
            // else decrement timer
            if (seconds > 0) {
                seconds--;
            } 
            else if (minutes > 0) {
                minutes--;
                seconds = 59;
            } 
            else if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }

        // format integer values of time to strings
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        // decrement timer
        hrDisplayValue.textContent = formattedHours;
        minDisplayValue.textContent = formattedMinutes;
        secDisplayValue.textContent = formattedSeconds;
    }

});
