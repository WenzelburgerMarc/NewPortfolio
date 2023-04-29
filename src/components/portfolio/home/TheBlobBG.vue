<template>
    <div class="blob-container dark-mode">
        <div class="blob-box">
            <div class="blob-bg"></div>
        </div>
    </div>
</template>
<script>
export default {

    name: "TheBlobBG",
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.blob-container {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: visible;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0;

    pointer-events: none;

    background: lighten($color2-light, 10%);

    &.dark {
        background: $color3-dark;
    }

    .blob-box {
        position: relative;
        mix-blend-mode: soft-light;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
        pointer-events: none;

        .blob-bg {
            position: relative;
            top: calc(50% - 130px);
            left: calc(50% - 130px);
            z-index: 1;
            pointer-events: auto;
            transform: translate(calc(-1 * (50% - 260px)), calc(-1 * (50% - 260px)));
            width: 500px;
            height: 500px;
            background: linear-gradient(180deg, $effect-color 0%, $color3-dark 100%);

            mix-blend-mode: soft-light;
            animation: moveBlobBG 25s infinite alternate;
            transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
            z-index: 0;

            &:hover {
                width: 520px;
                height: 520px;
                overflow: hidden;
                filter: blur(3rem);
                box-shadow: inset 0 0 0 0.5rem $blob-color-1,
                    inset 10rem 10rem 0 0 $blob-color-2,
                    inset 20rem 20rem 0 0 $blob-color-3,
                    inset 30rem 30rem 0 0 $blob-color-4;
            }
        }
    }
}

@keyframes moveBlobBG {
    from {
        transform: translate(-10rem, -5rem) rotate(-90deg);
        border-radius: 24% 76% 70% 30% / 30% 30% 70% 70%;
    }

    to {
        transform: translate(45rem, 10rem) rotate(-10deg);
        border-radius: 30% 70% 76% 24% / 70% 30% 30% 70%;
    }
}

@media (max-width: 800px) {
    .blob-container {
        position: absolute;
    }

}

@media (hover: none) {

    .blob-bg {
        width: 520px !important;
        height: 520px !important;
        filter: blur(3rem) !important;
        box-shadow: inset 0 0 0 0.5rem $blob-color-1,
            inset 10rem 10rem 0 0 $blob-color-2, inset 20rem 20rem 0 0 $blob-color-3,
            inset 30rem 30rem 0 0 $blob-color-4 !important;
    }
}
</style>