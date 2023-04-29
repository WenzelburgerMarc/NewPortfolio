<template>
    <li class="nav-item">
        <a href="#home" @click="closeMobile" class="nav-link dark-mode active">Home</a>
    </li>
    <li class="nav-item">
        <a href="#projects" @click="closeMobile" class="nav-link dark-mode">Projects</a>
    </li>
    <li class="nav-item">
        <a href="#about" @click="closeMobile" class="nav-link dark-mode">About Me</a>
    </li>
    <li class="nav-item">
        <a href="#contact" @click="closeMobile" class="nav-link dark-mode">Contact</a>
    </li>
    <li class="nav-item">
        <a @click="$router.push('/imprint')" class="nav-link dark-mode">Imprint</a>
    </li>
</template>
<script>
export default {
    name: "TheNavLinks",
    methods: {
        closeMobile() {
            const mobileNavbar = document.getElementById("mobile-navbar");
            mobileNavbar.classList.remove("active");
        },
    },
    mounted() {
        this.$nextTick(() => {
            if (!"ontouchstart" in window || !navigator.maxTouchPoints) {
                // Section Indicator Navbar
                const navLinks = document.querySelectorAll(".nav-link");

                let scrollPos = window.scrollY;

                const updateScrollPos = () => {
                    scrollPos = window.scrollY;
                };

                let i = navLinks.length;



                const setNavLinksActive = () => {
                    for (let j = 0; j < i; j++) {

                        let link = navLinks[j];
                        const section = document.querySelector(link.getAttribute("href"));
                        if (
                            section.offsetTop <= scrollPos + 200 &&
                            section.offsetTop + section.offsetHeight > scrollPos + 200
                        ) {
                            link.classList.add("active");

                        } else {

                            link.classList.remove("active");
                        }
                    }
                };

                window.addEventListener("load", setNavLinksActive);
                window.addEventListener("scroll", () => {

                    updateScrollPos();
                    setNavLinksActive();
                });
            } else {
                const navLinks = document.querySelectorAll(".nav-link");

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });
            }
        });

    },


}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";


.nav-item {
    margin: 2rem 0;

    cursor: pointer;

    .nav-link {
        font-size: $fs-lg;
        font-weight: $fw-bold;
        color: $color2-dark;
        position: relative;

        &.dark {
            color: $color1-light;
        }
    }

    .nav-link::before {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background-color: $effect-color;
        transition: width 0.3s;
        position: absolute;
        bottom: -3px;
        left: 50%;
        transform: translateX(-50%);
    }

    .nav-link:hover::before {
        width: 100%;

    }

    .nav-link.active::before {
        width: 100%;
    }
}


@media (min-width: 880px) {
    .nav-item {
        margin: 2rem 2rem;

        .nav-link {
            font-size: $fs-md;
            font-weight: $fw-bold;


            &.dark {
                color: $color1-light;
            }
        }
    }


}

@media (hover: none) {

    .nav-link:hover::before {
        width: 0% !important;
    }

}
</style>