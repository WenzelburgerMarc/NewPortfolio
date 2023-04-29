<template>
    <div class="home-text">
        <h3 class="dark-mode">
            <TypingEffect text="Hi, I'm" delay="300" startDelay="0" fontSize="3.2rem" fontWeight="400"
                queryClass="home-text-greeting" />
        </h3>
        <h1 class="dark-mode">
            <TypingEffect text="Marc Wenzelburger" delay="300" startDelay="2000" fontSize="5rem" fontWeight="500"
                queryClass="home-text-name" />
        </h1>
        <p class="dark-mode">
            <TypingEffect text="I am a Developer from Germany" delay="300" startDelay="7500" fontSize="2.4rem"
                fontWeight="400" opacity="0.75" queryClass="home-text-sentence" />
        </p>
        <div class="btn-container">
            <a href="#contact" class="btn-1 dark-mode" id="homeBtnContact">Contact me</a>
            <a :href="githubLink" target="_blank" class="btn-2 dark-mode" id="homeBtnGithub">Github <i
                    class="bx bx-link-external dark-mode"></i></a>
        </div>
    </div>
</template>
<script>

import TypingEffect from "@/components/portfolio/effects/TypingEffect.vue";
export default {
    name: "TheHomeText",
    components: {
        TypingEffect,
    },
    inject: ['githubLink'],
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.home-text {
    width: 95%;
    z-index: 2;
    text-align: center;
    pointer-events: none;





    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .btn-1 {
        font-size: $fs-md;
        font-weight: $fw-bold;
        color: $color1-light;
        background-color: $effect-color;
        border: 1px solid $effect-color;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        margin: 1rem 0.5rem;
        cursor: pointer;
        transition: 0.25s ease;
        pointer-events: auto;
        z-index: 3;

        &:hover {
            color: $color1-dark;
            background-color: transparent;

            &.dark {
                color: $color1-light;
            }
        }
    }

    .btn-2 {
        font-size: $fs-md;
        font-weight: $fw-bold;
        color: $color1-dark;
        background-color: transparent;
        border: 1px solid $color1-dark;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        margin: 1rem 0.5rem;
        cursor: pointer;
        transition: 0.25s ease;
        pointer-events: auto;
        z-index: 3;

        &.dark {
            color: $color1-light;
            border: 1px solid $color1-light;
        }

        i {
            transition: 0.25s ease;
        }

        &:hover i {
            transform: translateY(-3px);
        }
    }
}

@media (max-width: 800px) {
    .home-text {
        width: 100%;
        height: 40%;
        margin: 5rem 0;
    }
}

@media (hover: none) {

    .btn-1:hover {
        color: $color1-light !important;
        background-color: $effect-color !important;

        &.dark {
            color: $color1-light !important;
        }
    }

    .btn-2:hover i {
        transform: translateY(0px) !important;
    }
}
</style>