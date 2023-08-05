// settings.js
// saving the desired input time for the timer
// saving settings for water and posture reminders
// global variable for timer display
const timerDisplay = {
    hrDisplay: document.getElementById('hr-display'),
    minDisplay: document.getElementById('min-display'),
    secDisplay: document.getElementById('sec-display'),
};



document.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.getElementById("settings-button");
    const settings = document.querySelector(".settings-bar"); 
    const closeSettingsButton = document.getElementById("close-settings-button");
    const waterInput = document.getElementById('water-input');
    // desired time input from user
    const hrInput = document.getElementById("set-hr");
    const minInput = document.getElementById("set-min");
    // current time displayed on timer
    const hrDisplay = document.getElementById("hr-display");
    const minDisplay = document.getElementById("min-display");
    const saveTimerBtn = document.getElementById("save-timer-btn");





    // show / hide settings menu
    settingsButton.addEventListener("click", function() {
        settings.classList.toggle("show-settings");
    });

    closeSettingsButton.addEventListener("click", function() {
        settings.classList.remove("show-settings");
    });




    
    // update the timer to display user input
    saveTimerBtn.addEventListener('click', () => {
        updateClock();

        if (parseInt(waterInput.value) > parseInt(minInput.value)) {
            alert("Insert valid water break increment.");
        }
        
    });

    function updateClock() {
        const hrs = hrInput.value || 0;
        const min = minInput.value || 0;

        const formattedHrs = hrs.toString().padStart(2, '0');
        const formattedMin = min.toString().padStart(2, '0');

        hrDisplay.textContent = formattedHrs;
        minDisplay.textContent = formattedMin;
    }
    
    updateClock();


});




