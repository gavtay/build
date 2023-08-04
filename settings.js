// settings.js
// global variable for timer display
const timerDisplay = {
    hrDisplay: document.getElementById('hr-display'),
    minDisplay: document.getElementById('min-display'),
    secDisplay: document.getElementById('sec-display'),
};

// opens the settings menu
document.addEventListener("DOMContentLoaded", function() {
    const settingsButton = document.getElementById("settings-button");
    const settings = document.querySelector(".settings-bar"); 
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

// When slider buttons are pressed, change background color, make input visible
document.addEventListener('DOMContentLoaded', () => {
    let waterBtnStatus = false;
    let postureBtnStatus = false;
    const waterBtn = document.getElementById('water-btn');
    const postureBtn = document.getElementById('posture-btn');
    const waterInput = document.getElementById('water-input');
    const postureInput = document.getElementById('posture-input'); 

    waterBtn.addEventListener('click', updateWaterBtn);
    postureBtn.addEventListener('click', updatePostureBtn);

    // Water button
    function updateWaterBtn() {
        if (waterBtnStatus == false) {
            waterBtnStatus = true;
            waterBtn.style.backgroundPosition = "left";
            waterBtn.style.color = "#fff";
            waterInput.style.visibility = "visible";
            return;
        }
        else {
            waterBtnStatus = false;
            waterBtn.style.backgroundPosition = "right";
            waterBtn.style.color = "#000";
            waterInput.style.visibility = "hidden";
            return;
        }
    }

    // Posture button
    function updatePostureBtn() {
        if (postureBtnStatus == false) {
            postureBtnStatus = true;
            postureBtn.style.backgroundPosition = "left";
            postureBtn.style.color = "#fff";
            postureInput.style.visibility = "visible";
            return;
        }
        else {
            postureBtnStatus = false;
            postureBtn.style.backgroundPosition = "right";
            postureBtn.style.color = "#000";
            postureInput.style.visibility = "hidden";
            return;
        }
    }


});

// Create an alert that notifies the user when their
// timer is up for the water or posture reminder

