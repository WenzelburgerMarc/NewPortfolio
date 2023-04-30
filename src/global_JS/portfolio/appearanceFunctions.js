function checkIcon() {
  //Change Icon
  const icon = document.querySelectorAll(".dark-mode-icon");
  icon.forEach(function (i) {
    if (localStorage.getItem("cookiesDisabled") !== "true") {
      if (
        localStorage.getItem("appearanceModeSwitched") === "light" ||
        localStorage.getItem("appearanceModeSwitched") === null
      ) {
        i.classList.replace("bx-moon", "bx-sun");
      } else if (localStorage.getItem("appearanceModeSwitched") === "dark") {
        i.classList.replace("bx-sun", "bx-moon");
      }
    } else {
      try {
        if (icon.classList.contains("bx-moon")) {
          i.classList.replace("bx-moon", "bx-sun");
        } else if (icon.classList.contains("bx-sun")) {
          i.classList.replace("bx-sun", "bx-moon");
        }
      } catch (error) {}
    }
  });
}

function changeAppearance() {
  return new Promise((resolve) => {
    const body = document.querySelector("body");
    const isDarkMode = body.classList.contains("dark");
    const backgroundColor = isDarkMode
      ? "darken(rgb(34, 47, 62), 10%)"
      : "lighten(rgb(131, 149, 167), 5%)";
    body.style.transition = "none";
    body.classList.toggle("dark");
    body.style.backgroundColor = backgroundColor;
    setTimeout(function () {
      body.style.transition = "";
    }, 50);

    const darkModeElements = document.querySelectorAll(".dark-mode");
    darkModeElements.forEach(function (element) {
      element.style.transition = "none";
      element.classList.toggle("dark");
      element.style.backgroundColor = backgroundColor;
      setTimeout(function () {
        element.style.transition = "";
      }, 50);
    });

    resolve();
  });
}

export { checkIcon, changeAppearance };
