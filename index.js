const triggerHamburger = document.querySelector("#trigger-hamburger");
const triggerSlider = document.querySelector("#trigger-slider");

triggerHamburger.onclick = function () {
  if (triggerSlider.className == "list-box-open") {
    triggerSlider.className = "list-box-close";
  } else {
    triggerSlider.className = "list-box-open";
  }
};
