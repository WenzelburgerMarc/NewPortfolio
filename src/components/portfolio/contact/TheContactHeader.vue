<template>
    <div class="contact-title">
        <h4 class="dark-mode">Get In Touch With Me</h4>
    </div>
</template>
<script>
export default {
    name: "TheContactHeader",
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.contact-title {
    max-width: 800px;
    text-align: center;

    h4 {
        font-size: $fs-lg;
        font-weight: $fw-light;

        line-height: $fs-xxl;

        margin: 3rem 0 1rem 0;
        color: $color1-light;

        &.dark {
            color: $color1-light;
        }
    }
}

@media (max-width: 1025px) {
    .contact-title {
        margin-top: 1rem;

        h4 {

            margin: 3rem 0 0 0;
        }
    }
}
</style>