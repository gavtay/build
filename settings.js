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
    const waterBtn = document.getElementById('water-btn');
    const postureBtn = document.getElementById('posture-btn');
    const waterInput = document.getElementById('water-input');
    const postureInput = document.getElementById('posture-input'); 
    let waterBtnStatus = false;
    let postureBtnStatus = false;
    // desired time input from user
    const hrInput = document.getElementById("set-hr");
    const minInput = document.getElementById("set-min");
    const secInput = document.getElementById("set-sec");
    // current time displayed on timer
    const hrDisplay = document.getElementById("hr-display");
    const minDisplay = document.getElementById("min-display");
    const secDisplay = document.getElementById("sec-display");
    const saveTimerBtn = document.getElementById("save-timer-btn");





    // show / hide settings menu
    settingsButton.addEventListener("click", function() {
        settings.classList.toggle("show-settings");
    });

    closeSettingsButton.addEventListener("click", function() {
        settings.classList.remove("show-settings");
    });





    // water and posture buttons
    waterBtn.addEventListener('click', updateWaterBtn);
    postureBtn.addEventListener('click', updatePostureBtn);

    // Water button
    function updateWaterBtn() {
        if (waterBtnStatus == false) {
            waterBtnStatus = true;
            waterBtn.style.backgroundPosition = "left";
            waterBtn.style.color = "#fff";
            waterInput.style.visibility = "visible";
            waterNotif();
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
            postureNotif();
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




    
    //Water notification implementation
    function waterNotif() {
        let intervalId = setInterval(checkWaterNotif, 1000);

        function checkWaterNotif() {
            let watInput = parseInt(waterInput.value);
            let gap = parseInt(minDisplay.textContent);
            let remainingMinutes = parseInt(minDisplay.textContent) - watInput;

            if (secDisplay.textContent === '00' && remainingMinutes === 0) {
                console.log('drink water');
            }

            // clear interval when timer hits 0
            if (hrDisplay.textContent == '00' && minDisplay.textContent == '00' && secDisplay.textContent == '00') {
                clearInterval(intervalId);
            }

        }

    }






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




