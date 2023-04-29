<template>
    <div class="cookie-banner hidden dark-mode">
        <div class="cookie-text">
            <h6 class="dark-mode">Cookies Consent</h6>
            <p class="dark-mode">
                By using this website, you automatically accept that I use cookies and local storage.
                <a class="dark-mode" @click="toggleReadMore">{{ readMoreValue }}</a>
            </p>
        </div>
        <div class="cookie-buttons">
            <button class="cookie-accept dark-mode">Accept</button>
            <button @click="deactivateCookies" class="cookie-reject dark-mode">Deny</button>
        </div>
        <p v-show="showReadMore" class="read-more-text dark-mode">
            This website uses cookies and local storage to ensure that you can use the website smoothly and to provide you
            with an optimal user experience. Cookies are small text files that are stored on your computer or mobile device
            when you visit the website. Local storage is a function of your browser that works similar to cookies but does
            not have an expiration time and offers more storage space. By using cookies and local storage, I can save your
            preferences and continuously improve my website. Also I use <a href="https://boxicons.com/" target="_blank"
                class="dark-mode">Box Icons</a> and <a href="https://fonts.google.com/" class="dark-mode"
                target="_blank">Google Fonts</a>.
            By using my website, you consent to my use of cookies and
            local storage.
        </p>
    </div>
</template>

<script>
export default {
    name: "TheCookies",
    data() {
        return {
            showReadMore: false,
            readMoreValue: "Read more",
        };
    },
    mounted() {
        const cookieBanner = document.querySelector(".cookie-banner");
        const cookieAcceptBtn = document.querySelector(".cookie-accept");
        const cookieDeclineBtn = document.querySelector(".cookie-reject");


        cookieAcceptBtn.addEventListener("click", function () {

            cookieBanner.classList.add("hidden");
            localStorage.setItem("cookieBanner", "accepted");
            localStorage.setItem("cookiesDisabled", false);
            window.location.reload()
        });

        cookieDeclineBtn.addEventListener("click", function () {
            cookieBanner.classList.add("hidden");

        });

        if (localStorage.getItem("cookieBanner") === "accepted") {
            cookieBanner.classList.add("hidden");

        } else {
            cookieBanner.classList.remove("hidden");
        }
    },
    methods: {
        toggleReadMore() {
            this.showReadMore = !this.showReadMore;
            if (!this.showReadMore) {
                this.readMoreValue = "Read more";
            } else {
                this.readMoreValue = "Read less";
            }
        },

        deactivateCookies() {
            //console.log("deactivate cookies");
            localStorage.clear();
            localStorage.setItem("cookiesDisabled", true);

        },
    },
};

</script>

<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.cookie-banner {
    position: fixed;
    bottom: 1rem;
    width: 100%;
    max-width: 450px;
    right: 1rem;
    background-color: $color2-light;
    padding: 1rem;
    z-index: 1001;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    flex-direction: column;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &.dark {
        background-color: $color2-dark;
    }
}

.cookie-banner.hidden {
    transform: translateY(100%);
    opacity: 0;
}

.read-more-text {
    font-size: $fs-xs;
    color: $color1-dark;
    margin: 1rem;

    &.dark {
        color: $color1-light;
    }

    a {
        font-size: $fs-xxs;
        color: $color1-dark;
        text-decoration: underline;
        transition: color 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            color: $effect-color;
        }

        &.dark {
            color: $color1-light;

            &:hover {
                color: $effect-color;
            }
        }
    }
}

.cookie-text {
    margin: 1rem;

    h6 {
        color: $color1-dark;
        font-size: $fs-md;

        &.dark {
            color: $color1-light;
        }
    }

    p {
        font-size: $fs-xs;
        color: $color1-dark;

        &.dark {
            color: $color1-light;
        }

        a {
            font-size: $fs-xxs;
            color: $color1-dark;
            text-decoration: underline;
            transition: color 0.3s ease-in-out;
            cursor: pointer;

            &:hover {
                color: $effect-color;
            }

            &.dark {
                color: $color1-light;

                &:hover {
                    color: $effect-color;
                }
            }
        }
    }
}

.cookie-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
}

.cookie-buttons button {
    font-size: $fs-xxs;
    padding: 1rem 2.5rem;
    border-radius: 0.5rem;
    margin-left: 1rem;

    border: none;
    color: $color1-light;

    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.cookie-accept {
    background-color: $color3-dark;

    &.dark {
        background-color: $color2-light;
    }
}

.cookie-buttons button:hover {
    background-color: lighten($color3-dark, 10%);
}

.cookie-buttons .cookie-reject {
    background-color: $color2-light;

    &.dark {
        background-color: $color2-dark;
    }
}

.cookie-buttons .cookie-reject:hover {
    background-color: darken($color2-light, 10%);
}

@media (max-width: 500px) {
    .cookie-banner {
        width: 100%;
        max-width: 100%;
        padding: 0 1rem 1rem 1rem;
        margin: 0;
        border-radius: 0;
        right: 0;
        bottom: 0;
    }
}

@media (hover: none) {

    .read-more-text {
        a {
            &:hover {
                color: $color1-dark;
            }

            &.dark {
                &:hover {
                    color: $color1-light;
                }
            }
        }
    }

    .cookie-text {
        p {
            a {
                &:hover {
                    color: $color1-dark;
                }

                &.dark {
                    &:hover {
                        color: $color1-light;
                    }
                }
            }
        }
    }

    .cookie-accept {
        &:hover {
            background-color: $color3-dark;
        }

        &.dark {
            &:hover {
                background-color: $color2-light;
            }
        }
    }

    .cookie-reject {
        &:hover {
            background-color: $color2-light;
        }

        &.dark {
            &:hover {
                background-color: $color2-dark;
            }
        }
    }

}
</style>