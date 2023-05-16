<template>
    <div class="read-more-container dark-mode">


        <div class="image-box" v-if="computedCardImageLink != ''">
            <img :src="computedCardImageLink" alt="" />
        </div>
        <div class="close-read-more dark-mode" @click="closeReadMore"><i class='bx bx-x dark-mode'></i></div>
        <div class="read-more-title">
            <h5 class="dark-mode">
                {{ computedCardTitle }}
            </h5>
        </div>
        <div class="read-more-body">
            <div class="read-more-description">
                <p class="dark-mode">{{ computedCardDescription }}</p>
            </div>
            <div class="language-list-container">
                <div class="language-list">
                    <h6 class="dark-mode" v-for="language in computedCardLanguages" :key="computedCardLanguages.id">{{
                        language }}</h6>

                </div>
                <div class="card-buttons">
                    <a :href="computedCardRepoLink" target="_blank" class="btn-3 dark-mode">Github</a>
                    <a v-if="computedCardOpenProjectLink != '#' && computedCardOpenProjectLink != ''"
                        :href="computedCardOpenProjectLink" target="_blank" class="btn-3 btn-3-transparent dark-mode">Live
                        <i class="bx bx-link-external"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { fixAppearance } from "@/global_js/portfolio/fixAppearance.js";
export default {
    name: "TheReadMoreCard",
    props: {
        project: {
            type: Object,
            required: true,
        },

    },
    mounted() {
        fixAppearance();
    },
    computed: {
        computedProject() {
            return this.project;
        },
        computedCardTitle() {
            return this.project.name;
        },
        computedCardDescription() {
            return this.project.description;
        },
        computedCardLanguages() {
            return this.project.languages;
        },
        computedCardRepoLink() {
            return this.project.html_url;
        },
        computedCardOpenProjectLink() {
            return this.project.openProjectLink;
        },
        computedCardImageLink() {

            return this.project.image;
        },
    },
    methods: {
        closeReadMore() {
            this.$emit('closeReadMore');
        },
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.read-more-container {
    background-color: lighten($color2-light, 5%);
    border-radius: 10px;
    padding: 1rem;
    margin: 3rem 3rem 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    transition: all 0.3s ease-in-out;
    position: fixed;
    top: calc(50% + 50px);
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 700px;

    width: 100%;

    margin: .5rem;
    margin-inline: 0.5rem;
    overflow: hidden;
    height: auto;
    z-index: 102;
    pointer-events: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);

    &.dark {
        background-color: darken($color2-light, 25%);
    }

    .close-read-more {
        position: absolute;
        top: 0;
        left: 0;
        margin: 0.5rem;
        overflow: hidden;
        width: 40px;
        height: 40px;
        cursor: pointer;
        opacity: 1;
        transition: 0.15s ease;


        i {
            font-size: $fs-xxl;
            width: 40px;
            height: 40px;

            color: $color1-dark;

            &.dark {
                color: $color1-light;
            }
        }

    }

    .image-box {
        width: 100%;
        height: 100%;
        max-height: 200px;
        max-width: 200px;


        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        position: relative;

        transition: .25s ease;
        pointer-events: auto;


        box-sizing: border-box;


        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 1rem;
            pointer-events: none;

        }

    }

    .read-more-body {
        margin-top: 1rem;
        overflow: hidden;
        height: 100%;
        width: 100%;
        transition: 0.15s ease;
    }

    .read-more-title {
        opacity: 1;
        transition: 0.15s ease;
        margin-top: 3rem;

        h5 {
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            margin: 0;
            padding: 0;
            transition: 0.25s ease;
            pointer-events: auto;
            font-size: $fs-xl;

            color: $color1-dark;

            &.dark {
                color: $color1-light;

            }

        }
    }

    .read-more-description {
        opacity: 1;
        margin: 0;
        padding: 0;
        transition: .25s ease;
        pointer-events: auto;
        font-size: $fs-lg;
        text-align: center;

        height: 40px;
        background: transparent;
        margin-bottom: 1rem;
        overflow: hidden;

        p {

            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1; // Die maximale Anzahl der Zeilen, die angezeigt werden sollen
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-hyphens: auto;
            hyphens: auto;

            color: $color1-dark;

            &.dark {
                color: $color1-light;

            }
        }

    }

    .language-list-container {

        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        bottom: 0;
        margin: 0;


    }


    .language-list {

        bottom: 0;
        display: flex;
        justify-content: center;
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
            line-height: $fs-md;
            padding: 1rem;
            color: $color1-dark;

            &.dark {
                color: $color1-light;
            }
        }
    }

    .card-buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 1rem;

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

                background: $effect-color;
            }
        }

        .btn-3-transparent {
            color: $color1-light;

            font-size: $fs-xxs;
            border: none;
            background: transparent !important;
            margin-top: 1rem;

            &:active {
                background: transparent !important;
            }
        }
    }
}



@media (max-height: 600px) {
    .read-more-container {
        opacity: 0 !important;
        display: none !important;
    }
}

@media (max-width: 800px) {
    .read-more-container {
        margin: 0;
        border-radius: 0;
    }

    .read-more-description {
        margin-top: 1.5rem !important;
    }

    h5 {
        font-size: $fs-lg !important;
    }

    p {
        font-size: $fs-xs !important;
    }
}

@media (hover: none) {

    .btn-3:hover {

        background: $effect-color !important;

        &.dark {
            color: $color1-light !important;
            background: $effect-color !important;

        }


    }
}
</style>