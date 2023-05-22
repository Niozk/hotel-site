<template>
    <section>
        <div class="welcome-container">
            <p>Welcome to Hotel Site</p>
        </div>
        <div class="hotel-search-container">
            <p>Find your perfect apartment</p>
            <HotelSearchBox />
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate } from "motion"
import HotelSearchBox from './HotelSearchBox.vue';

let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let slideScale = (viewportWidth <= 1070) ? 0 : 10;

onMounted(() => {
    animate(
        ".welcome-container p",
        { x: slideScale, opacity: [0, 1] },
        { duration: 0.9 }
    )
});
</script>

<style scoped>
section {
    display: grid; 
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: 1fr;
    height: 475px;
}

.welcome-container {
    display: flex;
    padding: 85px 0 0 60px;
    font-size: 42px;
    background-color: #ef233c;
    color: white;
    text-align: center;
}

.hotel-search-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 24px;
    color: #2B2D42;
}

@media only screen 
and (max-width: 1460px) {
    .welcome-container {
        padding-left: 25px;
        font-size: 32px;
    }
}

@media only screen 
and (max-width: 1070px) {
    section {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .welcome-container {
        justify-content: center;
        padding: 65px 0 0 0;
    }
}

@media only screen 
and (max-width: 650px) {
    section {
        height: 800px;
    }

    .hotel-search-container {
        margin-top: 50px;
        font-size: 20px;
    }
}
</style>