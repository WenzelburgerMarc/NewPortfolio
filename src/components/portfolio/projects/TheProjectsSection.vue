<template>
    <section class="projects dark-mode" id="projects">
        <!-- Projects Header Start -->
        <TheProjectsHeader @searchQueryProjects="handleSearchedProjects" />
        <!-- Projects Header End -->

        <!-- Projects Body Start -->
        <TheProjectsBody :projects="filteredProjects" v-on:readMoreCardIndex="handleReadMore" />
        <!-- Projects Body End -->

        <!-- Load More Button Start -->
        <TheLoadMoreButton v-on:loadMoreProjects="handleLoadMore" v-if="hasMoreProjects" />
        <!-- Load More Button End -->

        <!-- Read More Card Start -->
        <!-- Read More Card Start -->
        <TheReadMoreCard :project="filteredProjects[readMoreCardIndex]" v-on:closeReadMore="handleCloseReadMore"
            v-if="computedReadMoreCardIndex != -1" class="animate__animated animate__fadeIn" />
        <!-- Read More Card End -->

        <!-- Read More Card End -->
    </section>
</template>
<script>
import TheProjectsHeader from "./TheProjectsHeader.vue";
import TheProjectsBody from "./TheProjectsBody.vue";
import TheLoadMoreButton from "./TheLoadMoreButton.vue";
import TheReadMoreCard from "./TheReadMoreCard.vue";
export default {
    name: "TheProjectsSection",
    components: {
        TheProjectsHeader,
        TheProjectsBody,
        TheLoadMoreButton,
        TheReadMoreCard,
    },
    data() {
        return {
            readMoreCardIndex: -1,
            projectsSearchQuery: "",
            projectsLimit: 3,
        }
    },
    created() {
        this.$store.dispatch("fetchProjects");
    },
    computed: {
        filteredProjects() {
            if (this.projectsSearchQuery === "") {
                return this.$store.getters.allProjects.slice(0, this.projectsLimit);
            }
            return this.$store.getters.allProjects.filter(project => {
                const searchLower = this.projectsSearchQuery.toLowerCase();
                const languagesLower = project.languages.map(lang => lang.toLowerCase());
                const languagesString = languagesLower.join(' ');
                return project.name.toLowerCase().includes(searchLower) ||
                    project.description.toLowerCase().includes(searchLower) ||
                    languagesString.includes(searchLower);
            }).slice(0, this.projectsLimit);

        },

        computedReadMoreCardIndex() {
            return this.readMoreCardIndex;
        },

        hasMoreProjects() {
            return this.projectsLimit < this.$store.getters.allProjects.length;
        },
    },
    methods: {
        handleReadMore(cardIndex) {

            this.readMoreCardIndex = cardIndex;

        },
        handleCloseReadMore() {

            this.readMoreCardIndex = -1;
        },
        handleSearchedProjects(searchQuery) {
            this.projectsSearchQuery = searchQuery;
        },
        handleLoadMore() {

            this.projectsLimit += 3;
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.projects {
    position: relative;
    min-height: 100vh;
    width: 100%;
    background: darken($color2-light, 5%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    pointer-events: none;

    &.dark {
        background: darken($color2-dark, 5%);
    }
}
</style>