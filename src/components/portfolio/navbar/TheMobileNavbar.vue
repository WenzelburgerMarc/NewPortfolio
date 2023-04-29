<template>
    <nav id="mobile-navbar" class="dark-mode">
        <ul class="nav-list">
            <TheNavLinks />
        </ul>
    </nav>
</template>
<script>
import TheNavLinks from "./TheNavLinks.vue";

export default {
    name: "TheMobileNavbar",
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
    },
};
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";
@import "@/global_css/portfolio/darkModeToggler.scss";

#mobile-navbar {
    display: none;
}

@media (max-width: 880px) {



    #mobile-navbar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: lighten($color2-light, 5%);
        margin-top: 80px;
        z-index: 1000;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.5s ease-in-out;

        &.dark {
            background-color: darken($color3-dark, 10%);
        }

        &.active {
            transform: translateX(0);
            opacity: 1;
        }

        .nav-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0;
            list-style: none;

        }

    }
}


@media (max-height: 700px) {
    #mobile-navbar {
        justify-content: flex-start;
    }
}

@media (max-height: 500px) {
    #mobile-navbar {
        .nav-item {
            margin: 0.75rem 0 !important;

            .nav-link {
                font-size: $fs-md !important;
            }
        }
    }
}

@media (max-height: 350px) {
    #mobile-navbar {
        .nav-item {
            margin: 0.25rem 0 !important;
        }
    }
}

@media (hover: none) {

    #mobile-navbar,
    #mobile-navbar .active {
        transition: transform 1s, opacity 1s !important;
    }
}

@import "@/global_css/portfolio/disableHoverNavHamburger.scss";
</style>