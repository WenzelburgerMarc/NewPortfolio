<template>
    <div class="projects-body">
        <!-- Projects Cards-Container Start -->
        <div class="cards-container">
            <!-- Project Card Start -->
            <TheBodyCard v-for="(project, index) in projects" :key="index" :card-index="index" @read-more="handleReadMore"
                :cardTitle="project.name" :cardDescription="project.description" :cardLanguages="project.languages"
                :cardRepoLink="project.html_url" :cardOpenProjectLink="project.openProjectLink"
                :cardImageLink="project.image" />
            <!-- Project Card End -->

        </div>
        <!-- Projects Cards-Container End -->

    </div>
</template>
<script>
import TheBodyCard from "./body/TheBodyCard.vue";
export default {
    name: "TheProjectsBody",
    components: {
        TheBodyCard,
    },
    props: {
        projects: {
            type: Array,
            required: true,
        },
    },

    methods: {
        handleReadMore(cardIndex) {

            this.$emit('readMoreCardIndex', cardIndex);
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.projects-body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 2rem 2rem;
}

.cards-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    margin: 0 5rem;
}
</style>