document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("html");

  const themeSwitcher = document.querySelector(".theme-switcher");
  const themeButtons = document.querySelectorAll(".theme-switcher__button");
  const savedTheme = localStorage.getItem("theme") || "light dark";

  // Check if the clicked element is a button without the selected class and change the theme accordingly
  themeSwitcher.addEventListener("click", function (event) {
    const button = event.target.closest(".theme-switcher__button:not(.selected)");

    if (button) {
      const theme = button.getAttribute("data-theme");
      changeTheme(theme);
    } else { // Only one button available on mobile
      const isMobileMQ = matchMedia("(max-width: 600px)").matches;
      if (isMobileMQ) {
        const currTheme = event.target.getAttribute("data-theme");

        setNextTheme(currTheme);
      }
    }
  });

  function setNextTheme(currentTheme) {
    switch (currentTheme) {
      case "light":
        changeTheme("light dark");
        break;
      case "light dark":
        changeTheme("dark");
        break;
      case "dark":
        changeTheme("light");
        break;
    }
  }

  function changeTheme(theme) {
    themeButtons.forEach((button) => {
      button.classList.remove("selected");
    });

    let tbn = document.querySelector(`button[data-theme="${theme}"]`);
    // 
    // Add selected class and save it on ls
    document
      .querySelector(`button[data-theme="${theme}"]`)
      .classList.add("selected");
    localStorage.setItem("theme", theme);
    root.style.setProperty("color-scheme", theme); // Used for light-dark function
  }

  //#region Main

  // Ensure that the function is called at least once to set the initial theme
  changeTheme(savedTheme);

  ///#endregion
});
