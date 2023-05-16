<template>
    <header>
        <!-- Desktop Navbar Start -->
        <TheDesktopNavbar ref="TheDesktopNavbar" />
        <!-- Desktop Navbar End -->

        <!-- Mobile Navbar Start -->
        <TheMobileNavbar />
        <!-- Mobile Navbar End -->
    </header>
</template>
<script>
import TheDesktopNavbar from './TheDesktopNavbar.vue'
import TheMobileNavbar from './TheMobileNavbar.vue'
import { checkIcon, changeAppearance } from '@/global_js/portfolio/appearanceFunctions.js'
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

                        this.$refs.TheDesktopNavbar.toggleDarkMode(true);


                    }
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





        });
    },
}
</script>