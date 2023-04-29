<template>
    <section class="contact dark-mode" id="contact">
        <!-- Contact Header Start -->
        <TheContactHeader />
        <!-- Contact Header End -->
        <div class="contact-container">
            <!-- Contact Info Start -->
            <TheContactInfo />
            <!-- Contact Info End -->

            <!-- Contact Form Start -->
            <TheContactForm />
            <!-- Contact Form End -->
        </div>
    </section>
</template>
<script>
import TheContactHeader from "./TheContactHeader.vue";
import TheContactInfo from "./TheContactInfo.vue";
import TheContactForm from "./TheContactForm.vue";
export default {
    name: "TheContactSection",
    components: {
        TheContactHeader,
        TheContactInfo,
        TheContactForm,
    },
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.contact {
    pointer-events: none;
    position: relative;
    min-height: 100vh;
    padding: 5rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: darken($color2-light, 35%);

    &.dark {
        background: darken($color2-dark, 15%);
    }



    .contact-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }
}

@media (max-width: 1025px) {
    .contact {
        padding: 6rem;

        .contact-container {
            flex-direction: column;
        }
    }
}

@media (max-width: 525px) {
    .contact-container {
        margin: 0 !important;
    }

    .contact {
        padding: 0rem !important;
        margin: 0;
        justify-content: space-evenly;
    }


}
</style>