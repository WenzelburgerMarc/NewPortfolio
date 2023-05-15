<template>
    <nav class="navbar transparent-nav dark-mode">
        <div class="logo">Portfolio.</div>
        <ul class="nav-list">
            <TheNavLinks />
        </ul>

        <div class="nav-mobile-toggler">
            <span class="bar top dark-mode"></span>
            <span class="bar middle dark-mode"></span>
            <span class="bar bottom dark-mode"></span>
        </div>
        <div class="darkMode-Toggler" v-if="showDarkModeToggler">
            <i class="bx bx-moon dark-mode dark-mode-icon"></i>
        </div>
    </nav>
</template>
<script>
import TheNavLinks from "./TheNavLinks.vue";
export default {
    name: "TheDesktopNavbar",
    components: {
        TheNavLinks,
    },
    data() {
        return {
            showDarkModeToggler: false,

        };
    },
    mounted() {
        if (localStorage.getItem("cookiesDisabled") !== "true") {
            this.showDarkModeToggler = true;
        }

        let lastScrollTop = 0;
        const navbar = document.querySelector(".navbar");
        window.addEventListener("scroll", () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (window.innerWidth <= 880) {
                return;
            }
            if (scrollTop > lastScrollTop) {
                // downscroll code

                navbar.classList.add("navbar-hidden");
            } else {
                // upscroll code

                navbar.classList.remove("navbar-hidden");


            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }


}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";
@import "@/global_css/portfolio/darkModeToggler.scss";

.navbar {
    background-color: lighten($color2-light, 5%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem 2rem;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 80px;
    transition: 0.25s ease;

    &.transparent-nav {
        background-color: lighten($color2-light, 10%) !important;
        box-shadow: none !important;
    }

    &.dark {
        background-color: darken($color3-dark, 10%);

        &.transparent-nav {
            background-color: $color3-dark !important;


        }
    }

    .logo {
        font-size: $fs-lg;
        font-weight: $fw-bold;
        color: $effect-color;
        left: 0;
        position: absolute;
        margin-left: 2rem;
        cursor: pointer;
    }

    .nav-list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0;
        list-style: none;




    }

    .darkMode-Toggler i {
        font-size: $fs-lg;
        font-weight: $fw-regular;
        color: $color2-dark;
        transform: rotate(260deg);
        margin-left: 1rem;

        cursor: pointer;
        transition: 0.25s ease;

        &.dark {
            color: $color1-light;
        }

        &:hover {
            color: $effect-color;
            transform: translateY(-2px) rotate(260deg);
        }
    }



    .nav-mobile-toggle {
        display: none;
    }


}

.navbar-hidden {
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.5s ease;
}


@media (max-width: 880px) {
    .navbar {


        .nav-list {
            display: none;
        }

        .nav-mobile-toggler {
            width: 3rem;
            height: 2rem;
            position: relative;
            cursor: pointer;
        }

        .nav-mobile-toggler .bar {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: $color1-dark;
            transition: transform 0.3s ease-in-out;

            &.dark {
                background-color: $color1-light;
            }
        }

        .nav-mobile-toggler .bar.middle {
            top: 50%;
            transform: translateY(-50%);
        }

        .nav-mobile-toggler .bar.top {
            top: 0;
        }

        .nav-mobile-toggler .bar.bottom {
            bottom: 0;
        }

        .nav-mobile-toggler.active .bar.middle {
            transform: translateY(-50%) translateX(-0.5rem);
        }

        .nav-mobile-toggler.active .bar.top {
            transform: translateX(-0.5rem);
        }

        .nav-mobile-toggler.active .bar.bottom {
            transform: translateX(-0.5rem);
        }

        .nav-mobile-toggler:hover .bar.middle {
            transform: translateY(-50%) translateX(0.5rem);
        }
    }
}

@import "@/global_css/portfolio/disableHoverNavHamburger.scss";
</style>