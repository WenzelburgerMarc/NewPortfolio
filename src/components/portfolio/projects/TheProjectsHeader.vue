<template>
    <div class="projects-header">
        <h3 class="dark-mode">Projects</h3>
        <div class="search-box">
            <input type="text" class="dark-mode" id="search-input" placeholder="Search for Title, Description or Language"
                v-model="searchQueryProjects" />
            <a @click="sendQueryProjectsToParent" class="btnSearch" id="btnSearch"><i
                    class="bx bx-search-alt-2 dark-mode"></i></a>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheProjectsHeader",
    data() {
        return {
            searchQueryProjects: "",
        }
    },
    methods: {
        sendQueryProjectsToParent() {
            this.$emit('searchQueryProjects', this.searchQueryProjects);
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.projects-header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 2rem;
    transition: opacity 0.25s ease;

    h3 {
        color: $color1-dark;
        font-size: $fs-xl;

        &.dark {
            color: $color1-light;
        }
    }
}

.search-box {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem;
    width: 80%;

    input[type="text"] {
        pointer-events: auto;
        width: 80%;
        max-width: 650px;
        padding: 1rem 2rem;
        background-color: rgba(255, 255, 255, 0.15);
        border: none;
        border-radius: 2rem;
        box-shadow: 0 0 1rem 1px solid rgba(255, 255, 255, 0.2),
            0 0 0 0.2rem 1px solid rgba(255, 255, 255, 0.2);
        color: $color1-dark;
        font-size: $fs-sm;
        font-weight: $fw-bold;
        height: 60pxs;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &.dark,
        &.dark::placeholder {
            color: $color1-light;
        }

        &::placeholder {
            color: $color1-dark;
            font-size: $fs-sm;
        }

        &:focus {
            outline: none;
        }
    }

    .btnSearch {
        pointer-events: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        margin: 0.5rem;
        margin-left: 1.5rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.15);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        &:hover i {
            transform: scale(1.2);
        }

        i {
            font-size: $fs-md;
            color: $color1-dark;
            transition: transform 0.15s ease-in;

            &.dark {
                color: $color1-light;
            }
        }
    }
}

@media (max-width: 700px) {
    input[type="text"] {


        &::placeholder {
            font-size: $fs-xs !important;
        }
    }
}

@media (max-width: 500px) {

    input[type="text"] {
        height: 40px;

        &::placeholder {
            font-size: $fs-xxs !important;
        }
    }

    .btnSearch {
        width: 40px !important;
        height: 40px !important;


        i {
            font-size: $fs-sm;
        }
    }

}

@media (hover: none) {

    /* Fix Projects Animations */
    .btnSearch:hover i {
        transform: scale(1) !important;
    }

}
</style>