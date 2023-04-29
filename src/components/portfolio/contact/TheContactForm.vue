<template>
    <div class="contact-form dark-mode">
        <form @submit.prevent="sendEmail">
            <h5>Send Message</h5>
            <div class="input-box">
                <input class="dark-mode" type="text" v-model="fullName" name="" required
                    :class="{ 'filled': fullName !== '' }" />
                <span :class="{ 'active': fullName !== '' }">Full Name</span>
            </div>
            <div class="input-box">
                <input class="dark-mode" type="email" v-model="email" name="" required
                    :class="{ 'filled': email !== '' }" />
                <span :class="{ 'active': email !== '' }">E-Mail</span>
            </div>
            <div class="input-box">
                <textarea class="dark-mode" v-model="message" required :class="{ 'filled': message !== '' }"></textarea>
                <span :class="{ 'active': message !== '' }">Your Message</span>
            </div>
            <div class="input-box submit-btn-container">
                <button class="dark-mode" @click="sendEmail" :disabled="emailStatus === 'sending'">
                    <template v-if="emailStatus === 'sending'">
                        <i class='bx bx-loader-alt'></i>
                    </template>
                    <template v-else>
                        {{ sendBtnValue }}
                    </template>
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { fixAppearance } from "@/global_js/portfolio/fixAppearance.js";
emailjs.init("HL3I80pvFGGfwyxKR");
export default {
    name: 'TheContactForm',
    data() {
        return {
            fullName: '',
            email: '',
            message: '',
            emailStatus: 'idle',
            sendBtnValue: 'Send',
        };
    },
    methods: {
        async sendEmail() {
            const schema = yup.object().shape({
                fullName: yup.string().required('Full Name is required'),
                email: yup
                    .string()
                    .email('Invalid email address')
                    .required('Email is required')
                    .meta({ excludeFromUI: true }), // exclude "filled" class
                message: yup.string().required('Message is required'),
            });


            try {
                await schema.validate({
                    fullName: this.fullName,
                    email: this.email,
                    message: this.message,
                });

                this.emailStatus = 'sending';

                const emailParams = {
                    from_name: this.fullName,
                    email_id: this.email,
                    message: this.message,
                    reply_to: this.email,
                };

                const serviceID = "marcwenzelburger.com";
                const templateID = "template_ul302ft";
                emailjs.send(serviceID, templateID, emailParams).then(
                    (response) => {
                        //console.log('Email successfully sent:', response);
                        this.fullName = '';
                        this.email = '';
                        this.message = '';
                        this.emailStatus = 'sent';
                        this.sendBtnValue = 'Sent';
                    },
                    (error) => {
                        //console.error('Error sending email:', error);
                        this.emailStatus = 'error';
                        this.sendBtnValue = 'Error';
                    }
                );
            } catch (error) {
                //console.error(error.message);
            }
        },
    },
    mounted() {
        fixAppearance();
    },
};
</script>
<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.filled {
    background-color: transparent !important;
}

.contact-form {
    pointer-events: auto;
    width: 40%;
    padding: 4rem;
    background: darken($color2-light, 25%);
    border-radius: 1rem;

    &.dark {
        background: darken($color2-dark, 5%);
    }

    h5 {
        font-size: $fs-lg;
        font-weight: $fw-light;
        color: $color1-light;
    }

    .input-box {
        position: relative;
        width: 100%;
        margin-top: 1rem;

        input,
        textarea {
            width: 100%;
            background: transparent;
            padding: 0.5rem 0;
            font-size: $fs-xs;
            margin: 1rem 0;
            border: none;
            border-bottom: 2px solid $color2-dark;
            outline: none;
            resize: none;
            color: $color1-light;
        }

        input:focus~span,
        input:valid~span,
        textarea:focus~span,
        textarea:valid~span,
        input.filled~span,
        textarea.filled~span,
        span.active {
            color: $color1-light;
            transform: translateY(-2rem);
            font-size: $fs-xxs;

        }


        span {
            position: absolute;
            color: $color1-light;
            padding: 0.5rem 0;
            font-size: $fs-xs;
            margin: 1rem 0;
            font-weight: $fw-regular;
            left: 0;
            background: transparent;
            pointer-events: none;
            transition: 0.25s ease;
        }

        button {
            width: 10rem;
            background: $effect-color;
            color: $color1-light;
            border: 1px solid $effect-color;
            cursor: pointer;
            padding: 1.25rem 1rem;
            margin-top: 3rem;
            font-size: $fs-sm;
            border-radius: 0.5rem;
            transition: 0.25s ease;

            i {
                font-size: $fs-lg;
                color: $color1-light;
                animation: spin 1s ease infinite;
            }

            &.dark {
                background: $effect-color;
            }

            &:hover {
                background: transparent;
            }
        }
    }

    .submit-btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


@media (max-width: 1025px) {
    .contact-form {
        width: 100%;
    }
}

@media (max-width: 525px) {
    .contact-form {
        border-radius: 0 !important;
        background: transparent !important;

        input,
        textarea {
            background: transparent !important;
        }
    }
}

@media (hover: none) {

    .input-box span {
        transition: 0.25s ease !important;
    }

    .input-box {
        input[type="submit"] {
            background: $effect-color !important;
        }

        input~span,
        textarea~span {
            color: $color1-light !important;
            transform: translateY(-2rem) !important;
            font-size: $fs-xxs !important;
        }
    }

    button {
        background: $effect-color !important;
    }

}
</style>