<template>
    <div class="typing" v-if="startTyping">
        <span ref="text" class="dark-mode" :class="queryClass"
            :style="{ fontSize: fontSize, fontWeight: fontWeight, opacity: opacity }"></span>
        <span class="cursor dark-mode" ref="cursor" :class="{ visible: cursorVisible, queryClass }"
            :style="{ fontSize: fontSize, fontWeight: fontWeight }">|</span>
    </div>
    <div class="typing" v-else>
        <span class="dark-mode" :class="queryClass"
            :style="{ fontSize: fontSize, fontWeight: fontWeight, opacity: opacity }">{{ text
            }}</span>
    </div>
</template>
<script>
import { fixAppearance } from "@/global_js/portfolio/fixAppearance.js";
export default {
    name: "TypingEffect",
    props: {
        text: {
            type: String,
            required: true,
        },
        delay: {
            type: String,
            default: "100",
        },
        startDelay: {
            type: String,
            default: "0",
        },
        fontSize: {
            type: String,
            default: "2.4rem",
        },
        fontWeight: {
            type: String,
            default: "400",
        },
        opacity: {
            type: String,
            default: "1",
        },
        minWidth: {
            type: String,
            default: "500",
        },
        queryClass: {
            type: String,
            default: "",
        },

    },
    data() {
        return {
            currentIndex: 0,
            interval: null,
            cursorVisible: false,
            startTyping: window.innerWidth > Number(this.minWidth),
        };
    },
    methods: {
        writeLetter() {
            const textElement = this.$refs.text;
            const cursorElement = this.$refs.cursor;

            if (textElement) {
                textElement.textContent += this.text[this.currentIndex];
                this.currentIndex++;

                if (this.currentIndex >= this.text.length) {
                    clearInterval(this.interval);
                    this.cursorVisible = false;
                    cursorElement.style.display = "none";
                }
            }
        },
    },
    mounted() {
        if (!this.startTyping) return;
        if ("ontouchstart" in window || navigator.maxTouchPoints) return;
        if (this.interval) return; // exit if interval is already set

        const cursorElement = this.$refs.cursor;
        cursorElement.style.display = "inline";

        setTimeout(() => {
            this.cursorVisible = true;
            fixAppearance();
            this.interval = setInterval(() => {
                this.writeLetter();
            }, Number(this.delay));
        }, Number(this.startDelay));
    },


};
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

span {
    font-size: $fs-xxl;
    font-weight: $fw-bold;
    color: $color1-dark;

    &.dark {
        color: $color1-light;
    }
}

.cursor {
    animation: blink 1s infinite;
    opacity: 0 !important;

    &.dark {
        color: $color1-light !important;
    }
}

.cursor.visible {
    opacity: 1 !important;
}

@keyframes blink {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

@media (max-width: 500px) {
    .home-text-name {
        font-size: $fs-lg !important;
    }
}

@media (max-width: 300px) {
    .home-text-greeting {
        font-size: $fs-sm !important;
    }

    .home-text-name {
        font-size: $fs-md !important;
    }

    .home-text-sentence {
        font-size: $fs-sm !important;
    }
}
</style>
