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
