// opens the settings menu
document.addEventListener("DOMContentLoaded", function() {
    const settingsButton = document.getElementById("settings-button");
    const settingsPopup = document.querySelector(".settingsPopup"); 

    settingsButton.addEventListener("click", function() {
        settingsPopup.classList.toggle("show-settings");
    });

});
