<template>
    <li class="nav-item">
        <a href="#home" @click="closeMobile" class="nav-link dark-mode active">Home</a>
    </li>
    <li class="nav-item">
        <div class="dropdown">
            <a href="#" @click="toggleDropdown" class="nav-link dropdown-toggler dark-mode">Previous Work <i
                    class='bx bx-chevron-down dropdown-icon dark-mode'></i></a>
            <div class="dropdown-content dark-mode">
                <a href="#projects" @click="closeMobile" class="nav-link dropdown-header dark-mode">Projects</a>
                <div class="divider dark-mode"></div>
                <a v-for="project in projectsWithLink" @click="closeMobile" :href="project.openProjectLink" target="_blank"
                    class="nav-link dark-mode">{{
                        project.name }}</a>

            </div>
        </div>

    </li>
    <li class="nav-item">

        <a href="#about" @click="closeMobile" class="nav-link dark-mode">About Me</a>
    </li>
    <li class="nav-item">
        <a href="#contact" @click="closeMobile" class="nav-link dark-mode">Contact</a>
    </li>
</template>
<script>
export default {
    name: "TheNavLinks",
    data() {
        return {
            projectsWithLink: [],
        };
    },
    methods: {
        closeMobile() {
            const mobileNavbar = document.getElementById("mobile-navbar");
            mobileNavbar.classList.remove("active");
        },
        toggleDropdown(e) {
            e.preventDefault();
            const dropdown = e.target.parentNode;
            dropdown.classList.toggle("active");
        },
        allLiveProjects() {
            let projectsWithLink = [];
            const filtered = this.$store.getters.allProjects.filter(project => {

                // Überprüfen, ob das Projekt einen openProjectLink hat
                if (project.openProjectLink) {
                    // Speichern Sie den Namen und den Link in einem Array
                    projectsWithLink.push({
                        name: project.name,
                        openProjectLink: project.openProjectLink
                    });
                }

                return project;
            });

            // Speichern Sie die gefilterten Projekte, die einen Link haben
            this.projectsWithLink = projectsWithLink;
            return filtered;

        },
    },
    watch: {
        '$store.getters.allProjects': {
            immediate: true,
            handler() {
                this.allLiveProjects();
            },
        },
    },
    mounted() {
        this.$nextTick(() => {

            document.body.addEventListener('click', (event) => {
                const dropdown = document.getElementsByClassName("dropdown");

                // Überprüfen, ob das Ziel des Klicks nicht die Navbar ist
                for (let i = 0; i < dropdown.length; i++) {
                    if (!dropdown[i].contains(event.target)) {
                        dropdown[i].classList.remove("active");
                    }
                }
            });

            if (!"ontouchstart" in window || !navigator.maxTouchPoints) {
                // Section Indicator Navbar
                const navLinks = document.querySelectorAll(".nav-link:not(.dropdown a):not(.dropdown-content a)");

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

.divider {
    height: 1px;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    margin: 1rem;

    &.dark {
        background-color: $color1-light;
    }

}

.dropdown-header {
    font-size: $fs-md;
    font-weight: $fw-bold;
    color: $color2-dark;
    width: 100%;
    margin: 0;
    padding: 0rem 1rem;


    width: 100%;
    align-self: center;


    &.dark {
        color: $color1-light;

    }
}

.dropdown-content {
    background: lighten($color2-light, 5%) !important;
    border-radius: 1rem;
    pointer-events: none;
    position: absolute;
    background-color: $color1-light;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    opacity: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.5rem;
    transition: .25s;
    margin-top: 5.75rem;

    &.transparent-nav {
        background-color: lighten($color2-light, 10%) !important;
        box-shadow: none !important;
    }

    &.dark {
        background-color: darken($color3-dark, 10%) !important;

        &.transparent-nav {
            background-color: $color3-dark !important;
        }
    }

    a {
        margin: 0.5rem 0;
        width: 100%;
        text-align: center;
        font-size: $fs-md;
        font-weight: $fw-bold;
        color: $color2-dark;
        transition: all 0.3s ease-in-out;


    }
}

.dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.dropdown-icon {
    transition: .25s;
}



.dropdown {

    &.active {
        .dropdown-content {
            pointer-events: auto;
            opacity: 1;
        }

        .dropdown-icon {
            transform: rotate(-180deg);
        }

    }

}


.dropdown {
    transition: .25s;
}

.nav-item {
    margin: 2rem 0;

    cursor: pointer;

    .nav-link {
        font-size: $fs-lg;
        font-weight: $fw-bold;
        color: $color2-dark;
        position: relative;


        i {

            font-size: $fs-md;
            margin-left: 0rem;
            vertical-align: middle;
        }

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

@media (max-width: 330px) {
    .nav-link {
        font-size: $fs-sm !important;
    }
}

@media (hover: none) {

    .nav-link:hover::before {
        width: 0% !important;
    }

}
</style>