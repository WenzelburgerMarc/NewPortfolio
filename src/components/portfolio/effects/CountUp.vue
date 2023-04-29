<template>
    {{ count }}
</template>

<script>
export default {
    props: {
        number: {
            type: Number,
            required: true
        },
        delay: {
            type: Number,
            default: 1000,
        },
    },
    data() {
        return {
            count: 0
        };
    },
    mounted() {
        this.startCounting();
    },
    methods: {
        startCounting() {
            let i = 0;
            let timer = setInterval(() => {
                this.count = i;
                i++;
                if (i > this.number) {
                    clearInterval(timer);
                }
            }, this.delay);
        }
    }
};
</script>
