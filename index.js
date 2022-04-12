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

// theming logic using localStorage
const triggerTheme = document.querySelector("#trigger-theme");
const renderThemeIcon = document.querySelector("#render-theme-icon");
const currentTheme = localStorage.getItem("theme");

const codeSnippetLight = document.querySelector("#code-snippet-light");

if (currentTheme == "darkMode") {
  renderThemeIcon.className = "fa fa-sun";
  document.body.classList.add("dark-theme");
} else {
  renderThemeIcon.className = "fa fa-moon";
  document.body.classList.remove("dark-theme");
}

const setTheme = () => {
  if (renderThemeIcon.className == "fa fa-sun") {
    // for icon
    renderThemeIcon.className = "fa fa-moon";
    //persistant theming with local storage
    localStorage.setItem("theme", "lightMode");
    document.body.classList.remove("dark-theme");
    //code snippet light theme toggle
    codeSnippetLight.classList.remove("hide");
    codeSnippetLight.classList.add("code-snippet-light");
  } else if (renderThemeIcon.className == "fa fa-moon") {
    renderThemeIcon.className = "fa fa-sun";
    localStorage.setItem("theme", "darkMode");
    document.body.classList.add("dark-theme");
    codeSnippetLight.classList.add("hide");
  }
};

triggerTheme.addEventListener("click", setTheme);
