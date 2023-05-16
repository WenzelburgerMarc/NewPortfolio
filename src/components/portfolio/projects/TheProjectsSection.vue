<template>
    <section class="projects dark-mode" id="projects">
        <!-- Projects Header Start -->
        <TheProjectsHeader @searchQueryProjects="handleSearchedProjects" />
        <h6 v-if="noProjectFound" class="dark-mode">No Projects found!</h6>
        <p v-if="noProjectFound" class="dark-mode">Here is something you may like</p>

        <!-- Projects Header End -->

        <!-- Projects Body Start -->
        <TheProjectsBody :projects="filteredProjects" v-on:readMoreCardIndex="handleReadMore" />
        <!-- Projects Body End -->

        <!-- Load More Button Start -->
        <TheLoadMoreButton v-on:loadMoreProjects="handleLoadMore" v-if="hasMoreProjects" />
        <!-- Load More Button End -->

        <!-- Read More Card Start -->
        <div class="gray-overlay" v-if="readMoreCardClosState !== -1"
            :class="['animate__animated', readMoreCardClosState === -2 ? 'animate__fadeOut' : 'animate__fadeIn']"></div>
        <TheReadMoreCard :project="filteredProjects[readMoreCardIndex]" v-on:closeReadMore="handleCloseReadMore"
            v-if="readMoreCardClosState !== -1"
            :class="['animate__animated', readMoreCardClosState === -2 ? 'animate__fadeOut' : 'animate__fadeIn']" />
        <!-- Read More Card End -->

        <!-- Read More Card End -->
    </section>
</template>

<script>
import TheProjectsHeader from "./TheProjectsHeader.vue";
import TheProjectsBody from "./TheProjectsBody.vue";
import TheLoadMoreButton from "./TheLoadMoreButton.vue";
import TheReadMoreCard from "./TheReadMoreCard.vue";
import { fixAppearance } from "@/global_js/portfolio/fixAppearance.js";
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
            readMoreCardIndex: 0,
            readMoreCardClosState: -1,
            projectsSearchQuery: "",
            projectsLimit: 3,
            noProjectFound: false,
        }
    },
    created() {
        this.$store.dispatch("fetchProjects");
    },
    computed: {
        filteredProjects() {
            const filtered = this.$store.getters.allProjects.filter(project => {
                const searchLower = this.projectsSearchQuery.toLowerCase();
                const languagesLower = project.languages.map(lang => lang.toLowerCase());
                const languagesString = languagesLower.join(' ');
                return project.name.toLowerCase().includes(searchLower) ||
                    project.description.toLowerCase().includes(searchLower) ||
                    languagesString.includes(searchLower);
            }).slice(0, this.projectsLimit);

            if (filtered.length === 0) {
                this.noProjectFound = true;
                fixAppearance();
                return this.$store.getters.allProjects.slice(0, 1);
            } else {
                this.noProjectFound = false;
                return filtered;
            }
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
            this.readMoreCardClosState = 0;
        },
        handleCloseReadMore() {
            this.readMoreCardClosState = -2;
            setTimeout(() => {
                this.readMoreCardClosState = -1;
            }, 1000);
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

.gray-overlay {
    position: fixed;
    top: 0px;
    left: 0;
    width: 200%;
    height: 200%;
    z-index: 101 !important;
    background: rgba(0, 0, 0, 0.45);

    transition: 0.25s ease;
    pointer-events: none;
}

@media (max-height: 600px) {
    .gray-overlay {
        opacity: 0 !important;
        display: none !important;
    }
}

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

h6,
p {
    color: $color1-dark;

    &.dark {
        color: $color1-light;
    }
}
</style>