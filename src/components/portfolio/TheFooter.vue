<template>
    <footer class="dark-mode">
        <div class="container">
            <ul class="social-icon">
                <li>
                    <a :href="githubLink" target="_blank"><i class="bx bxl-github"></i></a>
                </li>
                <li>
                    <a :href="linkedinLink" target="_blank"><i class="bx bxl-linkedin"></i></a>
                </li>
                <li>
                    <a :href="instagramLink" target="_blank"><i class="bx bxl-instagram"></i></a>
                </li>
            </ul>
            <ul class="navbar-menu-in-footer">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a @click="$router.push('/imprint')" class="imprint-link dark-mode">Imprint</a>
                </li>
            </ul>

            <p>©2023 Marc Wenzelburger<br />All Rights Reserved</p>
        </div>
    </footer>
</template>
<script>
export default {

    name: "TheFooter",
    inject: ['githubLink', 'linkedinLink', 'instagramLink'],
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

footer {
    pointer-events: none;
    position: relative;
    width: 100%;
    min-height: 10rem;
    background: linear-gradient(to top,
            darken($color2-light, 45%) 0%,
            transparent 100%);

    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &.dark {
        background: linear-gradient(to top,
                darken($color2-dark, 16%) 0%,
                transparent 100%);
    }

    .container {
        margin-top: 5rem;
    }

    .social-icon,
    .navbar-menu-in-footer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        margin-top: 2rem;

        flex-wrap: wrap;
        padding: 0;
        width: 100%;

        a {
            color: $color1-light;
            font-size: $fs-xxl;
            margin: 0 1rem;
            display: inline-block;
            transition: 0.25s ease;
            pointer-events: auto;
            cursor: pointer;

            &:hover {
                color: $effect-color;
                transform: translateY(-5px);
            }
        }
    }

    .navbar-menu-in-footer a {
        font-size: $fs-md;
    }

    p {
        color: $color1-light;
        font-size: $fs-xxs;
        font-weight: $fw-light;
        margin-top: 2.5rem;
        text-align: center;
        padding-bottom: 3rem;
    }
}

@media (max-width: 991px) {
    footer {
        background: darken($color2-light, 45%);

        &.dark {
            background: darken($color2-dark, 16%);
        }

        .container {
            margin-top: 0rem;
        }
    }
}

@media (hover:none) {

    .social-icon,
    .navbar-menu-in-footer {
        a {
            &:hover {
                color: $color1-light !important;
                transform: translateY(-0px) !important;
            }
        }
    }
}
</style>