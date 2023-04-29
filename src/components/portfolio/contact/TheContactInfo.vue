<template>
    <div class="contact-info">
        <div class="box">
            <div class="icon dark-mode">
                <i class="bx bx-briefcase-alt-2"></i>
            </div>
            <div class="text">
                <h6 class="dark-mode">Work</h6>
                <p class="dark-mode">Web Development<br />App Development</p>
            </div>
        </div>
        <div class="box">
            <div class="icon dark-mode"><i class="bx bx-signal-5"></i></div>
            <div class="text">
                <h6 class="dark-mode">Address</h6>
                <p class="dark-mode">98574 Schmalkalden,<br />Germany</p>
            </div>
        </div>
        <div class="box">
            <div class="icon dark-mode">
                <i class="bx bx-info-circle"></i>
            </div>
            <div class="text">
                <h6 class="dark-mode">E-Mail</h6>
                <p class="dark-mode">contact@marcwenzelburger.com</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheContactInfo",
}
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.contact-info {
    width: 50%;
    display: flex;
    flex-direction: column;

    border-radius: 1rem;

    .box {
        position: relative;
        padding: 2rem 1rem;

        display: flex;
        align-items: center;

        .icon {
            min-width: 60px;
            height: 60px;
            background: darken($color2-light, 25%);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-size: $fs-xl;
            color: $color1-light;

            &.dark {
                background: darken($color2-dark, 5%);
                color: $color1-light;
            }
        }

        .text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding-left: 1rem;

            h6 {
                font-size: $fs-md;
                font-weight: $fw-light;
                color: $color1-light;
                margin: 0 0 0.5rem 0;
                padding: 0.5rem 1rem;
                border-radius: 1rem;
                background: darken($color2-light, 25%);

                &.dark {
                    color: $color1-light;
                    background: darken($color2-dark, 5%);
                }
            }

            p {
                color: $color1-light;
                font-size: $fs-sm;
                font-weight: $fw-light;
                margin: 0;

                &.dark {
                    color: $color1-light;
                }
            }
        }
    }
}

@media (max-width: 1025px) {
    .contact-info {
        margin-bottom: 4rem;
        width: 100%;

        .box {
            .icon {
                background: darken($color2-light, 25%);
                color: $color1-light;
            }

            .text {
                h6 {
                    background: darken($color2-light, 25%);
                    color: $color1-light;
                }

                p {
                    color: $color1-light;
                }
            }
        }
    }
}

@media (max-width: 525px) {
    .contact-info .box .text {
        h6 {
            font-size: $fs-sm !important;
        }

        p {
            font-size: $fs-xxs !important;
        }
    }
}
</style>