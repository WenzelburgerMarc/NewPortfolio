<template>
    <div class="skills-para-helper para" data-rellax-speed="3">
        <div class="skills-container dark-mode" :class="orderClass">
            <div class="skills-box">
                <slot name="icon1">
                    <i :class="computedIconClass1"></i>
                </slot>
                <h6>
                    <slot name="text1"></slot>
                </h6>
            </div>
            <div class="skills-box dark-mode">
                <slot name="icon2">
                    <i :class="computedIconClass2"></i>
                </slot>
                <h6>
                    <slot name="text2"></slot>
                </h6>
            </div>
            <div class="skills-box dark-mode">
                <slot name="icon3">
                    <i :class="computedIconClass3"></i>
                </slot>
                <h6>
                    <slot name="text3"></slot>
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheSkillsBox",
    props: {
        orderClass: {
            type: String,
        },
        iconClass1: {
            type: String,
            default: "bx bx-x",

        },
        iconClass2: {
            type: String,
            default: "bx bx-x",
        },
        iconClass3: {
            type: String,
            default: "bx bx-x",
        },
    },
    computed: {
        computedIconClass1() {
            return this.iconClass1;
        },
        computedIconClass2() {
            return this.iconClass2;
        },
        computedIconClass3() {
            return this.iconClass3;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

i {
    font-size: $fs-xxl;
}


.skills-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 15%;
    height: 50%;
    background: darken($color2-light, 25%);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    min-width: 150px;

    &:nth-child(1) {
        margin-left: 0rem;
    }

    &:nth-child(2) {
        margin-right: 0rem;
    }

    &.dark {
        background: darken($color2-dark, 12%);
    }

    .skills-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem 3rem;
        width: 90%;
        border-bottom: 1px solid $color1-light;
        pointer-events: auto;

        &:hover {
            i {
                transform: translateY(-5px);
            }
        }

        i {

            font-size: $fs-xxl;
            color: $color1-light;
            transition: transform 0.25s ease;
        }

        h6 {
            font-size: $fs-sm;
            font-weight: $fw-light;
            color: $color1-light;
            line-height: $fs-md;
            margin: 0 0 0rem 0;
        }

        &:nth-child(3) {
            border-bottom: none;
        }
    }
}

@media (max-width: 800px) {
    .skills-para-helper {
        order: 2;

        .skills-container {
            margin-left: 0 !important;
            box-shadow: none;

            .skills-box {
                margin: 0;
            }
        }
    }
}

@media (hover: none) {

    .skills-box:hover i {
        transform: translateY(-0px) !important;
    }
}
</style>