<template>
    <section class="home dark-mode" id="home">
        <!-- Socials List Start -->
        <TheSocialsList />
        <!-- Socials List End -->

        <!-- Home Content Start -->
        <div class="home-content para" data-rellax-speed="-7">
            <TheHomeText />
        </div>
        <!-- Home Content End -->

        <!-- Home Blob Start -->
        <TheBlobBG />
        <!-- Home Blob End -->
    </section>
</template>
<script>
import TheSocialsList from "./TheSocialsList.vue";
import TheHomeText from "./TheHomeText.vue";
import TheBlobBG from "./TheBlobBG.vue";
export default {

    name: "TheHomeSection",
    components: {
        TheSocialsList,
        TheHomeText,
        TheBlobBG,
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

#home {
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    padding-top: 80px;

    overflow: hidden;
    background: transparent;
}

.home-content {
    display: flex;
    justify-content: space-evenly;

    align-items: center;
    text-align: center;
    padding: 0 2rem;
    bottom: 40px;
    width: 100%;
    height: 100%;
}

@media (max-width: 800px) {

    #home {
        height: auto;
        min-height: 100vh;
    }



    .home-content {
        position: relative;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 2rem;
        height: 100%;
    }
}

.home-content {
    pointer-events: none !important;

    &.para {
        z-index: 1 !important;
    }
}
</style>