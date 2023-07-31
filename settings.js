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

document.addEventListener("DOMContentLoaded", function() {
    const saveTimer = document.getElementsByClassName("save-timer-btn");
    var hourValue;
    var minValue;
    var secValue;

});

