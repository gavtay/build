document.addEventListener("DOMContentLoaded", function () {
    const settingsButton = document.getElementById("settings-button");
    const settingsBar = document.querySelector(".settings-bar");
    
    settingsButton.addEventListener("click", function () {
      settingsBar.classList.toggle("show-settings");
    });
  });

  