<template>
    <div class="imprint-header">
        <h6>Marc Wenzelburger</h6>
        <h6>Computer Science Student @ HS Schmalkalden</h6>
        <h6>98574 Schmalkalden, Germany</h6>
        <h6>contact@marcwenzelburger.com</h6>
        <a :href="homeLink" class="goPortfolioBtn">Portfolio</a>
    </div>

    <TheBlobBG />
</template>
<script>
import TheBlobBG from "@/components/portfolio/home/TheBlobBG.vue";
export default {

    name: "ImprintPage",
    inject: ['homeLink'],
    components: {
        TheBlobBG,
    },
}
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

// maybe overwrite min-width 300 and overflow x scroll at max-width 300 px

.imprint-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    z-index: 2 !important;
    pointer-events: none;

    h6 {
        z-index: 3 !important;
        pointer-events: none;
        color: $color1-dark;
    }


    a {
        z-index: 3 !important;
        font-size: $fs-md;
        pointer-events: auto;
        color: black;
        background: rgba($color: #000000, $alpha: 0.1);
        margin-top: 3rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
    }
}


@media (max-width: 800px) {
    .blob-container {
        position: fixed !important;
    }
}

@media (max-width: 500px) {
    .imprint-header {
        h6 {
            font-size: $fs-xxs;
        }
    }
}

@media (max-width: 330px) {
    .imprint-header {
        h6 {
            font-size: 1rem;
        }
    }
}
</style>