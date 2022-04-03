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

// theming logic
const triggerTheme = document.querySelector("#trigger-theme");
const renderThemeIcon = document.querySelector("#render-theme-icon");

triggerTheme.onclick = function () {
  console.log("dddd");
  if (renderThemeIcon.className == "fa fa-sun") {
    renderThemeIcon.className = "fa fa-moon";
    document.body.classList.remove("dark-theme");
  } else if (renderThemeIcon.className == "fa fa-moon") {
    console.log("dddd");
    renderThemeIcon.className = "fa fa-sun";
    document.body.classList.add("dark-theme");
  }
};
