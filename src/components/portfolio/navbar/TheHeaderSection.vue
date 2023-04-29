<template>
    <header>
        <!-- Desktop Navbar Start -->
        <TheDesktopNavbar />
        <!-- Desktop Navbar End -->

        <!-- Mobile Navbar Start -->
        <TheMobileNavbar />
        <!-- Mobile Navbar End -->
    </header>
</template>
<script>
import TheDesktopNavbar from './TheDesktopNavbar.vue'
import TheMobileNavbar from './TheMobileNavbar.vue'
export default {
    name: "TheHeaderSection",
    components: {
        TheDesktopNavbar,
        TheMobileNavbar,
    },

    mounted() {

        window.requestAnimationFrame(() => {
            const toggler = document.querySelector(".nav-mobile-toggler");
            const navLinksMobile = document.querySelector("#mobile-navbar");

            toggler.addEventListener("click", function () {
                toggler.classList.toggle("active");
                navLinksMobile.classList.toggle("active");
            });
            window.addEventListener("scroll", function () {
                const nav = document.querySelector(".navbar");
                const scrollPos = window.scrollY;

                if (scrollPos === 0) {
                    nav.classList.add("transparent-nav");
                } else {
                    nav.classList.remove("transparent-nav");
                }
            });

            // Dark Mode (each element needs the class .dark-mode, the class .dark needs to be in scss)
            const darkModeTogglers = document.querySelectorAll(".darkMode-Toggler");

            // Instantly change to dark mode if the user has dark mode activated in the browser globally
            // Does not work with v-for in TheBodyCard.vue and TheProjectsBody.vue
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            ) {
                if (localStorage.getItem("cookiesDisabled") !== "true") {
                    if (localStorage.getItem("appearanceModeSwitched") === null || localStorage.getItem("appearanceModeSwitched") !== "light") {
                        // Dark Mode activated by default if the user has dark mode activated in the browser globally
                        localStorage.setItem("appearanceModeSwitched", "dark");
                        changeAppearance().then(() => localStorage.setItem("appearanceModeSwitchedFinished", "true"));


                    }
                } else {

                    changeAppearance();
                }

            } else {
                if (localStorage.getItem("appearanceModeSwitched") === null) {
                    if (localStorage.getItem("cookiesDisabled") !== "true") {
                        localStorage.setItem("appearanceModeSwitched", "light");
                        localStorage.setItem("appearanceModeSwitchedFinished", "true");
                    }

                }
            }

            darkModeTogglers.forEach(function (toggler) {
                toggler.addEventListener("click", function () {
                    if (localStorage.getItem("cookiesDisabled") !== "true") {
                        if (localStorage.getItem("appearanceModeSwitched") === "light") {
                            localStorage.setItem("appearanceModeSwitched", "dark");
                        } else if (
                            localStorage.getItem("appearanceModeSwitched") === "dark"
                        ) {
                            localStorage.setItem("appearanceModeSwitched", "light");
                        }
                    }

                    checkIcon();
                    changeAppearance();
                });
            });
            checkIcon();
            function checkIcon() {
                //Change Icon
                const icon = document.querySelectorAll(".dark-mode-icon");
                icon.forEach(function (i) {
                    if (localStorage.getItem("cookiesDisabled") !== "true") {
                        if (localStorage.getItem("appearanceModeSwitched") === "light" || localStorage.getItem("appearanceModeSwitched") === null) {
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
                        } catch (error) {

                        }

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

        });
    },
}
</script>
