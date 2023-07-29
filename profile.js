document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profile-button");
    const profileBar = document.querySelector(".profile-bar");
    const closeprofileButton = document.getElementById("close-profile-button");

    profileButton.addEventListener("click", function () {
        profileBar.classList.toggle("show-profile");
    });

    closeprofileButton.addEventListener("click", function () {
        profileBar.classList.remove("show-profile");
    });

});
