<template>
    <section>
        <img v-for="item in img" :src="item.img" alt="pay icon">
    </section>
</template>

<script setup>
import { ref } from "vue";

const img = ref([
    {img: '../src/assets/pay_icon_1.png'},
    {img: '../src/assets/pay_icon_2.png'},
    {img: '../src/assets/pay_icon_3.png'},
    {img: '../src/assets/pay_icon_4.png'},
    {img: '../src/assets/pay_icon_5.png'}
])
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 70px 0;
}

img {
    width: 90px;
}

@media only screen 
and (max-width: 700px) {
    section {
        gap: 15px;
    }

    img {
        width: 75px;
    }
}

@media only screen 
and (max-width: 470px) {
    section {
        gap: 0;
    }
}

@media only screen 
and (max-width: 470px) {
    img {
        width: 60px;
    }
}
</style>