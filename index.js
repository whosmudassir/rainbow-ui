// slider logic
const triggerHamburger = document.querySelector("#trigger-hamburger");
const triggerSlider = document.querySelector("#trigger-slider");
const iconRendered = document.querySelector("#render-icon");
triggerHamburger.onclick = function () {
  if (triggerSlider.className == "list-box-open") {
    triggerSlider.className = "list-box-close";
    iconRendered.className = "fa fa-bars";
  } else {
    triggerSlider.className = "list-box-open";
    iconRendered.className = "fa fa-xmark";
  }
};

// theme logic
const triggerTheme = document.querySelector("#trigger-theme");
const renderThemeIcon = document.querySelector("#render-theme-icon");

triggerTheme.onclick = function () {
  if (renderThemeIcon.className == "fa fa-sun") {
    renderThemeIcon.className = "fa fa-moon";
    document.body.classList.remove("dark-theme");
  } else if (renderThemeIcon.className == "fa fa-moon") {
    renderThemeIcon.className = "fa fa-sun";
    document.body.classList.toggle("dark-theme");
  }
};
