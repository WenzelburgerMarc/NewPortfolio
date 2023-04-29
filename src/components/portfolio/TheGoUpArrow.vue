<template>
    <div>
        <div class="go-up-arrow hidden dark-mode" id="go-up-button">
            <i class="bx bx-up-arrow-alt"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheGoUpArrow",
    mounted() {

        //show go up arrow if it is not at the top
        const goUpArrow = document.querySelector(".go-up-arrow");
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.screen.height - 160) {
                goUpArrow.classList.remove("hidden");
            } else {
                goUpArrow.classList.add("hidden");
            }
        });


        //Scroll To Top Animation on click on go-up-arrow
        function scrollToTop() {
            var currentPosition =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;

            if (currentPosition > 1) {
                window.requestAnimationFrame(scrollToTop);
                window.scrollTo(91, currentPosition - currentPosition / 4);
            }
        }

        scrollToTop(); // Scroll to top on page load

        var goUpButton = document.querySelector("#go-up-button");
        goUpButton.addEventListener("click", function (e) {
            e.preventDefault();
            scrollToTop();
        });
    },

}
</script>

<style lang="scss" scoped>
@import "@/global_css/portfolio/variables.scss";

.go-up-arrow {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: rgba($color: $effect-color, $alpha: 0.4);
    width: 50px;
    height: 50px;
    z-index: 1000;
    border-radius: 20%;
    pointer-events: auto;
    cursor: pointer;
    transition: 0.25s ease;

    &.hidden {
        opacity: 0;
        pointer-events: none;
    }

    &.dark {
        background: rgba($color: $effect-color, $alpha: 0.5);
    }

    &:hover {
        transform: translateY(-4px);
    }

    &:hover i {
        transform: translateY(-5px);
    }

    i {
        transition: 0.25s ease;
        font-size: $fs-xxl;
        color: $color1-light;
    }
}

@media (hover: none) {

    .go-up-arrow {
        transition: 0.25s ease !important;

        &:hover {
            transform: translateY(0px) !important;
        }

        &:hover i {
            transform: translateY(0px) !important;
        }
    }
}
</style>