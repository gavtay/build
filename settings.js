// opens the settings menu
document.addEventListener("DOMContentLoaded", function() {
    const settingsButton = document.getElementById("settings-button");
    const settings = document.querySelector(".settings"); 
    const closeSettingsButton = document.getElementById("close-settings-button");

    settingsButton.addEventListener("click", function() {
        settings.classList.toggle("show-settings");
    });

    closeSettingsButton.addEventListener("click", function() {
        settings.classList.remove("show-settings");
    });

});

// When a time change is made in the settings menu
// And save is pressed, push the time change to the main screen
document.addEventListener('DOMContentLoaded', () => {
    // desired time input from user
    const hrInput = document.getElementById("set-hr");
    const minInput = document.getElementById("set-min");
    const secInput = document.getElementById("set-sec");

    // current time displayed on timer
    const hrDisplay = document.getElementById("hr-display");
    const minDisplay = document.getElementById("min-display");
    const secDisplay = document.getElementById("sec-display");

    const saveTimerBtn = document.getElementById("save-timer-btn");
    saveTimerBtn.addEventListener('click', updateClock);

    // update the timer to display what user inputted
    function updateClock() {
        const hrs = hrInput.value || 0;
        const min = minInput.value || 0;
        const sec = secInput.value || 0;

        const formattedHrs = hrs.toString().padStart(2, '0');
        const formattedMin = min.toString().padStart(2, '0');
        const formattedSec = sec.toString().padStart(2, '0');

        hrDisplay.textContent = formattedHrs;
        minDisplay.textContent = formattedMin;
        secDisplay.textContent = formattedSec;
    }

    updateClock();
    
});


