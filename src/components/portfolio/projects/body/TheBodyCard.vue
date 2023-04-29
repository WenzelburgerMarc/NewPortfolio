<template>
    <div class="card">
        <div class="image-box" v-if="computedCardImageLink != ''">
            <img :src="computedCardImageLink" alt="" />
        </div>
        <div class="card-content">
            <div class="card-text">
                <h5 class="dark-mode">
                    {{ computedCardTitle }} <br /><a class="dark-mode readMoreLink"
                        @click="$emit('read-more', cardIndex)">Read more</a>
                </h5>
                <div class="language-list-container">
                    <div class="language-list">
                        <h6 class="dark-mode" v-for="language in computedCardLanguages" :key="computedCardLanguages.id">{{
                            language }}</h6>

                    </div>
                    <div class="card-buttons">
                        <a :href="computedCardRepoLink" target="_blank" class="btn-3 dark-mode">Github</a>
                        <a v-if="computedCardOpenProjectLink != '#' && computedCardOpenProjectLink != ''"
                            :href="computedCardOpenProjectLink" target="_blank"
                            class="btn-3 btn-3-transparent dark-mode">Live <i class="bx bx-link-external"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { fixAppearance } from "@/global_js/portfolio/fixAppearance.js";
export default {
    name: "TheBodyCard",
    props: {
        cardIndex: {
            type: Number,
            required: true,
        },
        cardTitle: {
            type: String,
            default: '-',
        },
        cardDescription: {
            type: String,
            default: '-',
        },
        cardLanguages: {
            type: Array,
            default: '-',
        },
        cardRepoLink: {
            type: String,
            default: '#',
        },
        cardOpenProjectLink: {
            type: String,
            default: '#',
        },
        cardImageLink: {
            type: String,
            default: '',
        },
    },
    computed: {
        computedCardTitle() {
            return this.cardTitle;
        },
        computedCardDescription() {
            return this.cardDescription;
        },
        computedCardLanguages() {
            return this.cardLanguages;
        },
        computedCardRepoLink() {
            return this.cardRepoLink;
        },
        computedCardOpenProjectLink() {
            return this.cardOpenProjectLink;
        },
        computedCardImageLink() {
            return this.cardImageLink;
        },
    },

    mounted() {

        // Card Hover on non touch devices
        const cards = document.querySelectorAll(".card");
        const projectsHeader = document.querySelector(".projects-header");
        const loadMoreBtn = document.querySelector(".load-more-helper");
        cards.forEach((card) => {
            card.addEventListener("mouseover", () => {
                if (
                    (!"ontouchstart" in window || !navigator.maxTouchPoints) &&
                    window.innerWidth > 856
                ) {
                    cards.forEach((c) => {
                        if (c !== card) {
                            c.style.transitionDuration = "0.5s";
                            c.style.opacity = "0";
                        }
                    });

                    projectsHeader.style.transitionDuration = "0.25s";

                    projectsHeader.style.opacity = "0";

                    try { // if load more btn exists (we used v-if in TheProjectsSection.vue)
                        loadMoreBtn.style.transitionDuration = "0.25s";
                        loadMoreBtn.style.opacity = "0";
                    } catch (error) {

                    }

                }
            });

            card.addEventListener("mouseout", () => {
                if (
                    (!"ontouchstart" in window || !navigator.maxTouchPoints) &&
                    window.innerWidth > 749
                ) {
                    cards.forEach((c) => {
                        c.style.opacity = "1";
                    });
                    projectsHeader.style.opacity = "1";

                    try {
                        loadMoreBtn.style.opacity = "1";
                    } catch (error) {

                    }

                }
            });
        });
        fixAppearance();
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.card {
    position: relative;
    pointer-events: auto;
    width: 350px;
    height: 190px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 2rem;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
    transition: all 0.5s ease;
    margin: 1rem;
    margin-top: 6rem;

    &:hover {
        height: 450px;
    }

    &:hover .image-box {
        width: 250px;
        height: 250px;
    }

    .image-box {
        position: absolute;
        left: 50%;
        top: -50px;
        transform: translateX(-50%);
        width: 150px;
        height: 150px;

        box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
        border-radius: 2rem;
        overflow: hidden;
        z-index: 3;
        transition: 0.3s ease;

        img {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card-content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        overflow: hidden;

        .card-text {
            padding: 4rem;
            text-align: center;
            width: 100%;

            transition: 0.5s ease-in-out;
            transform: translateY(195px);

            h5 {
                font-size: $fs-md;
                font-weight: $fw-bold;
                color: $color1-dark;
                line-height: $fs-md;
                height: 50px;
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;

                &.dark {
                    color: $color1-light;
                }

                a {
                    font-size: $fs-xs;
                    font-weight: $fw-light;
                    color: $color1-dark;
                    line-height: $fs-sm;
                    opacity: 0.75;
                    text-decoration: underline;
                    cursor: pointer;


                    &.dark {
                        color: $color1-light;
                    }
                }
            }

            .language-list {
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                gap: 1rem;
                flex-wrap: wrap;
                margin: 2rem 0;
                height: 44px;
                overflow: hidden;
                width: 100%;

                h6 {
                    border-radius: 1rem;
                    background: rgba(255, 255, 255, 0.15);
                    font-size: $fs-sm;
                    font-weight: $fw-extra-light;
                    color: $color1-dark;
                    line-height: $fs-md;
                    padding: 1rem;

                    &.dark {
                        color: $color1-light;
                    }
                }
            }

            .card-buttons {
                display: flex;
                justify-content: center;
                gap: 2rem;

                .btn-3 {
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
                        background: $effect-color;
                    }
                }

                .btn-3-transparent {
                    color: $color1-dark;
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    font-size: $fs-xxs;
                    border: none;
                    background: transparent !important;

                    &:active {
                        background: transparent !important;
                    }
                }
            }
        }
    }
}

.card:hover .card-text {
    transform: translateY(0px);
}

@media (max-width: 750px) {
    .card {
        height: 450px !important;
    }

    .image-box {
        width: 250px !important;
        height: 250px !important;
    }

    .card-text {
        transform: translateY(0) !important;
    }
}

@media (max-height: 600px) {
    .readMoreLink {
        opacity: 0 !important;
        display: none !important;
    }
}

@media (hover: none) {


    .card {
        height: 450px !important;
    }

    .image-box {
        width: 250px !important;
        height: 250px !important;
    }

    .card-text {
        transform: translateY(0) !important;
    }

    .card-buttons a:hover {
        background: $effect-color !important;
    }

    .btn-3:hover {
        background-color: $effect-color !important;

        &.dark {
            background-color: $effect-color !important;
        }
    }
}
</style>