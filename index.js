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
