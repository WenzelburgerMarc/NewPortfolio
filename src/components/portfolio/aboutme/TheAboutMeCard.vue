<template>
    <div class="about-me-container">
        <div class="about-para-helper para" data-rellax-speed="-3">
            <div class="about-me-bg-helper">
                <div class="about-me-text">
                    <h3>About Me</h3>
                    <p>
                        Hello! <br />
                        My name is Marc and I am
                        <CountUp :number="age" :delay="250" /> years old. <br />
                        Programming is my profession since
                        <CountUp :number="2" :delay="1000" />
                        <CountUp :number="0" :delay="1000" />
                        <CountUp :number="1" :delay="1000" />
                        <CountUp :number="6" :delay="1000" />. <br />
                        If you like to work with me<br />feel free to contact me<br />at
                        the bottom of the page.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CountUp from "@/components/portfolio/effects/CountUp.vue";
export default {
    name: "TheAboutMeCard",
    components: {
        CountUp,
    },
    data() {
        return {
            age: null,
        };
    },
    mounted() {
        const birthdate = new Date("2000-09-03");
        const ageDiffMs = Date.now() - birthdate.getTime();
        const ageDate = new Date(ageDiffMs);
        this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
    },
};
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.about-me-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
    min-width: 390px;
    max-width: 800px;
    height: 450px;

    pointer-events: auto;
    margin: 3rem 1rem;

    border-radius: 1rem;

    transition: 0.25s ease;

    .about-para-helper {
        border-radius: 2rem;
        box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
        width: 100%;
        height: 100%;
        background: darken($color2-light, 25%);
        background-image: url(../../../assets/portfolio/img/aboutme-transparent.png);
        background-size: auto 100%;
        background-repeat: no-repeat;
        background-position: calc(100% + 1px) bottom;
    }

    &.dark {
        background: darken($color2-dark, 15%);
    }

    &:hover {
        background-size: auto 107%;
        background-position: calc(100% + 1px) bottom;
    }

    &:hover .about-me-text h3 {
        margin-top: 60px;
        opacity: 1;

    }

    &:hover .about-me-text p {
        margin-bottom: 60px;
        opacity: 1;
    }

    &:hover .about-me-bg-helper {
        background: rgba(0, 0, 0, 0.35);
    }
}

.about-me-bg-helper {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.65);
    transition: 0.25s ease;
}

.about-me-text {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;

    h3 {
        line-height: $fs-lg;
        font-size: $fs-xl;
        margin: 5rem 0rem;
        transition: 0.25s ease;
        color: $color1-light;
        opacity: 0.75;
    }

    p {
        text-align: center;
        font-size: $fs-lg;
        line-height: 3.25rem;
        font-weight: $fw-light;
        transition: 0.25s ease;

        opacity: 0.75;
        margin: 5rem auto;

        color: $color1-light !important;
    }
}


@media (max-width: 1600px) {
    .about-me-text p {
        font-size: $fs-md;
        line-height: 3rem;
    }
}

@media (max-width: 1250px) {
    .about-me-text p {
        font-size: $fs-sm;
        line-height: 3rem;
    }
}

@media (max-width: 800px) {

    .about-me-text {
        p {
            font-size: $fs-md;
            line-height: 3rem;
        }
    }



    .about-me-container {
        order: 1;
    }

    .about-me-container {
        width: 100% !important;
        box-shadow: none;
        max-width: none;
        border-radius: 0;
        margin-left: 0 !important;
        margin-right: 0 !important;
        margin-top: 0 !important;

        .about-para-helper {
            border-radius: 0;
            box-shadow: none;
        }
    }

    .about-me-bg-helper {
        border-radius: 0;
    }
}

@media (max-width: 500px) {
    .about-me-text p {
        font-size: $fs-sm;
    }

    .about-me-text h3 {
        font-size: $fs-lg;
    }
}

@media (max-width: 400px) {
    .about-me-text p {
        font-size: $fs-xs;
        font-weight: $fw-bold;
    }

    .about-me-text h3 {
        font-size: $fs-md;
    }
}

@media (max-width: 350px) {
    .about-me-text p {
        font-size: $fs-xxs;
        font-weight: $fw-bold;
    }
}

@media (hover: none) {


    .about-me-text h3 {
        margin-top: 5rem !important;
        opacity: 1 !important;
    }

    .about-me-text p {
        margin-bottom: 5rem !important;
        opacity: 1 !important;
    }

    .about-me-container:hover {
        background-size: auto 100% !important;
    }

    .about-me-container:hover .about-me-text h3 {
        margin-top: 5rem !important;
        opacity: 1 !important;
    }

    .about-me-container:hover .about-me-text p {
        margin-bottom: 5rem !important;
        opacity: 1 !important;
    }

    .about-me-container:hover .about-me-bg-helper {
        background: rgba(0, 0, 0, 0.65) !important;
    }

}
</style>