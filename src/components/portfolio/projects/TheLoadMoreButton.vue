<template>
    <div class="load-more-helper">
        <div class="load-more-container">
            <a @click="handleLoadMore" class="load-more-btn dark-mode">Load More</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheLoadMoreButton",
    methods: {
        handleLoadMore() {
            this.$emit('loadMoreProjects');
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.load-more-helper {
    position: relative;
    bottom: 1rem;
    transition: 0.25s ease;
    z-index: 3;
}

.load-more-container {
    top: 9rem;
    display: flex;

    margin: 2rem 0;

    .load-more-btn {
        pointer-events: auto;
        padding: 1rem 2rem;
        border-radius: 1rem;
        border: 1px solid $effect-color;
        outline: none;
        font-size: $fs-sm;
        font-weight: $fw-bold;
        background: $effect-color;
        color: $color1-light;
        cursor: pointer;
        transition: 0.25s ease;

        &:hover {
            background: transparent;

            &.dark {
                background: transparent;
            }
        }

        &.dark {
            color: $color1-light;
            border-color: $effect-color;
            background: $effect-color;
        }
    }
}

@media (hover: none) {
    .load-more-btn:hover {
        background-color: $effect-color !important;

        &.dark {
            background-color: $effect-color !important;
        }
    }
}
</style>