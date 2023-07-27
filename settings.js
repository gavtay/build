document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.getElementById("settings-button");
    const settingsBar = document.querySelector(".settings-bar");
    const closeSettingsButton = document.getElementById("close-settings-button");

    settingsButton.addEventListener("click", function () {
        settingsBar.classList.toggle("show-settings");
    });

    closeSettingsButton.addEventListener("click", function () {
        settingsBar.classList.remove("show-settings");
    });

});
