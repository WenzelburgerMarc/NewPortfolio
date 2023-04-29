<template>
    <!-- Cookies Start -->
    <TheCookies />
    <!-- Cookies End -->

    <!-- Go Up Button Start -->
    <TheGoUpArrow />
    <!-- Go Up Button End -->

    <div class="wrapper">
        <!-- Header Start -->
        <TheHeaderSection />
        <!-- Header End -->

        <!-- Home Section Start -->
        <div class="home-section">
            <TheHomeSection />
        </div>
        <!-- Home Section End -->

        <!-- Projects Section Start -->
        <div class="projects-section">
            <TheProjectsSection />
        </div>
        <!-- Projects Section End -->

        <!-- About Me Section Start -->
        <div class="about-me-section">
            <TheAboutMeSection />
        </div>
        <!-- About Me Section End -->

        <!-- Contact Section Start -->
        <div class="contact-section">
            <TheContactSection />
        </div>
        <!-- Contact Section End -->

        <!-- Footer Section Start -->
        <div class="footer">
            <TheFooter />
        </div>
        <!-- Footer Section End -->
    </div>
</template>

<script>
import TheCookies from "@/components/portfolio/TheCookies.vue";
import TheGoUpArrow from "@/components/portfolio/TheGoUpArrow.vue";
import TheHeaderSection from "@/components/portfolio/navbar/TheHeaderSection.vue";
import TheHomeSection from "@/components/portfolio/home/TheHomeSection.vue";
import TheProjectsSection from "@/components/portfolio/projects/TheProjectsSection.vue";
import TheAboutMeSection from "@/components/portfolio/aboutme/TheAboutMeSection.vue";
import TheContactSection from "@/components/portfolio/contact/TheContactSection.vue";
import TheFooter from "@/components/portfolio/TheFooter.vue";

export default {
    components: {
        TheCookies,
        TheGoUpArrow,
        TheHeaderSection,
        TheHomeSection,
        TheProjectsSection,
        TheAboutMeSection,
        TheContactSection,
        TheFooter,
    },
    created() {
        // Local Storage and cookies
        if (localStorage.getItem("cookiesDisabled") === null || localStorage.getItem("cookiesDisabled") === "false") {
            localStorage.setItem("cookiesDisabled", false);
        } else {
            localStorage.clear();
            localStorage.setItem("cookiesDisabled", true);
        }
    },
    mounted() {


        // Scroll Reveal
        if (!"ontouchstart" in window || !navigator.maxTouchPoints) {
            ScrollReveal({
                reset: false,
                distance: "40px",
                duration: 2000,
                delay: 200,
            });

            ScrollReveal().reveal(".home-text", {
                origin: "top",
            });

            ScrollReveal().reveal(".socials-list", {
                origin: "left",
            });

            ScrollReveal().reveal(".projects-header, .load-more-helper", {
                origin: "bottom",
            });

            ScrollReveal().reveal(".projects-body", {
                origin: "right",
            });

            ScrollReveal().reveal(".skills-container-1", {
                origin: "left",
            });

            ScrollReveal().reveal(".skills-container-2", {
                origin: "right",
            });

            if (window.innerWidth > 800) {
                ScrollReveal().reveal(".about-me-container", {
                    origin: "bottom",
                });
            }

            ScrollReveal().reveal(".contact-title", {
                origin: "bottom",
            });

            ScrollReveal().reveal(".contact-info", {
                origin: "left",
            });

            ScrollReveal().reveal(".contact-form", {
                origin: "right",
            });

            // Parallax

            let rellax;

            function destroyRellax() {
                if (rellax) {
                    rellax.destroy();
                    rellax = null;
                }
            }

            function initRellax() {
                rellax = new Rellax(".para", {
                    speed: -2,
                    center: true,
                    wrapper: null,
                    round: true,
                    vertical: true,
                    horizontal: false,
                });
            }

            function adjustRellax() {
                if (window.innerWidth < 800 || window.innerHeight < 700) {
                    destroyRellax();
                } else {
                    if (!rellax) {
                        initRellax();
                    }
                }
            }

            adjustRellax();

            window.addEventListener("resize", function () {
                adjustRellax();
            });
        }
    },

};
</script>

<style lang="scss" scoped>
// Import Font Family - Google Fonts
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@200;300;400;500&display=swap");
// Import Variables
@import "@/global_css/portfolio/variables.scss";

* {
    font-family: "IBM Plex Serif", serif;
    font-weight: $fw-regular;
    font-size: $fs-md;
}

section {
    min-height: 100vh;
}

// Section height min 400px
@media (max-height: 400px) {
    section {
        min-height: 400px;
    }
}

/* Typography */
h1 {
    font-size: $fs-xxxl;
    font-weight: $fw-bold;
}

h2 {
    font-size: $fs-xxl;
    font-weight: $fw-bold;
}

h3 {
    font-size: $fs-xl;
    font-weight: $fw-bold;
}

h4 {
    font-size: $fs-lg;
    font-weight: $fw-bold;
}

h5 {
    font-size: $fs-md;
    font-weight: $fw-bold;
}

h6 {
    font-size: $fs-sm;
    font-weight: $fw-bold;
}

p {
    font-size: $fs-md;
    font-weight: $fw-regular;
}

//Transparent BG effect
@media (min-width: 801px) {

    #projects,
    .about-me,
    .contact {
        background: transparent !important;

        &.dark {
            background: transparent !important;
        }
    }
}
</style>