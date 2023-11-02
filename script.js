


function hamburgerToggle() {
    const dropDown = document.getElementById("my-drop-down");
    const hidePage = document.getElementById("hide-down-page");
    const hamburgerButton = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".hamburger-close");

    dropDown.classList.toggle("show");
    hidePage.classList.toggle("hidePage");
    hamburgerButton.classList.toggle("hide");
    closeButton.classList.toggle("show");
  }