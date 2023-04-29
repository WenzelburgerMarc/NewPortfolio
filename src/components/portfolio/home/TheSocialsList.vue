<template >
    <div class="socials-list">
        <a :href="githubLink" target="_blank" class="social-link dark-mode"><i class="bx bxl-github"></i></a>
        <a :href="linkedinLink" target="_blank" class="social-link dark-mode"><i class="bx bxl-linkedin"></i></a>
        <a :href="instagramLink" target="_blank" class="social-link dark-mode"><i class="bx bxl-instagram"></i></a>
    </div>
</template>
<script>
export default {
    name: "TheSocialsList",
    inject: ['githubLink', 'linkedinLink', 'instagramLink'],

}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.socials-list {
    position: fixed;
    left: 0;
    background: transparent;

    width: 50px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: auto;
    margin: auto;
    border-radius: 0 10px 10px 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 100px;
    z-index: 999;

    .social-link {
        font-size: $fs-xl;
        font-weight: $fw-regular;
        color: darken($color2-dark, 15%);
        transition: 0.25s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.25s ease;
        z-index: 1000;

        i {
            padding: 2rem 0;
        }

        &.dark {
            color: $color1-light;
        }

        &:hover {
            color: $effect-color;
            transform: translateY(-3px);
        }
    }
}

@media (max-width: 1000px) {
    .socials-list {
        display: none;
    }
}

@media (hover: none) {

    .social-link:hover {
        color: inherit !important;
        transform: translateY(0px) !important;
    }
}
</style>