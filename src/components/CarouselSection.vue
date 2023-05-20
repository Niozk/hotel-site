<template>
    <section>
        <p>Why hotel site?</p>
        <div class="carousel">
            <Carousel :value="carouselItems" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="5000">
                <template #item="items">
                    <div class="carousel-item">
                        <i :class="items.data.icon"></i>
                        <h2>{{ items.data.text }}</h2>
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import { ref } from "vue";

const carouselItems = ref([
    {icon: 'icon-search', text: 'Finding a hotel has never been this fast and easy'},
    {icon: 'icon-gittip', text: 'Loved by millions of customers'},
    {icon: 'icon-trophy', text: 'Winner of the World Luxury Hotel Awards'},
    {icon: 'icon-road', text: 'Always a hotel near you'},
    {icon: 'icon-glass', text: 'Need a break? Come to our luxury lounge'},
]);

const responsiveOptions = ref([
    {
        breakpoint: '1070px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>

<style scoped>
section {
    padding: 80px 0 125px 0;
    background-color: white;
    color: #2B2D42;
}

p {
    display: flex;
    justify-content: center;
    font-size: 36px;
}

.carousel {
    padding-top: 75px;
}

.carousel-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 275px;
    margin: 0 25px;
    padding: 0;
    font-family: Poppins, arial, helvetica;
    background-color: white;
    box-shadow: 0 3px 10px #00000033;
}

i {
    display: flex;
    justify-content: center;
    font-size: 110px;
}

h2 {
    display: flex;
    justify-content: center;
    padding: 35px 10px 0 10px;
    text-align: center;
    font-size: 20px;
}

@media only screen 
and (max-width: 1070px) {
    section {
        padding-top: 200px;
    }
}

@media only screen 
and (max-width: 650px) {
    section {
        padding-top: 100px;
    }
}
</style>