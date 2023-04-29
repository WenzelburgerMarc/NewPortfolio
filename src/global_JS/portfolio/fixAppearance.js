export async function fixAppearance() {
  if (localStorage.getItem("cookiesDisabled") !== "true") {
    await waitForTrue(() => {
      return localStorage.getItem("appearanceModeSwitchedFinished") === "true";
    }, 5);

    if (localStorage.getItem("appearanceModeSwitched") === "dark") {
      const darkModeElements = document.querySelectorAll(
        ".dark-mode:not(.dark)"
      );
      darkModeElements.forEach(function (element) {
        element.style.transition = "none";
        element.classList.toggle("dark");
        setTimeout(function () {
          element.style.transition = "";
        }, 50);
      });
    }
  }

  function waitForTrue(checkFunction, delay) {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        const result = checkFunction();
        if (result === true) {
          clearInterval(intervalId);
          resolve(result);
        }
      }, delay);
    });
  }
}
