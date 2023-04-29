<template>
    <section class="about-me dark-mode" id="about">
        <!-- My Skills Showcase 1 Start -->
        <TheSkillsBox :order-class="skillsContainer1" :icon-class-1="iconClass1" :icon-class-2="iconClass2"
            :icon-class-3="iconClass3">
            <template #icon1>

            </template>
            <template #text1>
                HTML
            </template>
            <template #icon2>

            </template>
            <template #text2>
                CSS/SCSS
            </template>
            <template #icon3>

            </template>
            <template #text3>
                Javascript
            </template>
        </TheSkillsBox>
        <!-- My Skills Showcase 1 End -->

        <!-- About Me Card Start -->
        <TheAboutMeCard />
        <!-- About Me Card End -->

        <!-- My Skills Showcase 2 End -->
        <TheSkillsBox :order-class="skillsContainer1" :icon-class-1="iconClass4" :icon-class-2="iconClass5"
            :icon-class-3="iconClass6">
            <template #icon1>

            </template>
            <template #text1>
                VueJS
            </template>
            <template #icon2>

            </template>
            <template #text2>
                Java
            </template>
            <template #icon3>

            </template>
            <template #text3>
                SQL
            </template>
        </TheSkillsBox>
        <!-- My Skills Showcase 2 End -->
    </section>
</template>

<script>
import TheSkillsBox from "./TheSkillsBox.vue";
import TheAboutMeCard from "./TheAboutMeCard.vue";

export default {
    name: "TheAboutMeSection",
    components: {
        TheSkillsBox,
        TheAboutMeCard,
    },
    data() {
        return {
            skillsContainer1: "skills-container-1",
            skillsContainer2: "skills-container-2",
            iconClass1: "bx bxl-html5",
            iconClass2: "bx bxl-css3",
            iconClass3: "bx bxl-javascript",
            iconClass4: "bx bxl-vuejs",
            iconClass5: "bx bxl-java",
            iconClass6: "bx bx-data",
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";



.about-me {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    pointer-events: none;

    background: darken($color2-light, 8%);

    &.dark {
        background: darken($color2-dark, 8%);
    }
}

@media (max-width: 800px) {
    .about-me {
        align-items: flex-start;
        background: darken($color2-light, 25%);

        &.dark {
            background: darken($color2-dark, 12%);
        }
    }
}
</style>