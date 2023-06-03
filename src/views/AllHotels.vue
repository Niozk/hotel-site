<template>
    <section class="scroll-fade">
        <p class="section-title" id="section-title-all-hotels">All Hotels</p>
        <div class="container">
            <div v-for="item in locations" class="card">
                <img :src="item.img" alt="Hotel foto's">
                <div class="card-content">
                    <h3>{{ item.city }}</h3>
                    <p>{{ item.province }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { animate, scroll } from "motion"

const locations = ref([
    {city: 'Amsterdam', province: 'Noord-Holland', img: '/assets/hotel_1.png'},
    {city: 'Rotterdam', province: 'Zuid-Holland', img: '/assets/hotel_2.png'},
    {city: 'Enschede', province: 'Gelderland', img: '/assets/hotel_3.png'},
    {city: 'Utrecht', province: 'Utrecht', img: '/assets/hotel_4.png'},
    {city: 'Den Haag', province: 'Zuid-Holland', img: '../src/assets/hotel_5.png'},
    {city: 'Zoetermeer', province: 'Zuid-Holland', img: '../src/assets/hotel_6.png'},
    {city: 'Heerhugowaard', province: 'Noord-Holland', img: '../src/assets/hotel_7.png'}
])

onMounted(() => {
    document.querySelectorAll(".scroll-fade").forEach((item) => {
        scroll(animate(item, { opacity: [0, 1] }), {
            target: item,
            offset: ["start center", "center end"]
        });
    });
});

</script>

<style scoped>
section {
    padding: 80px 100px 100px 100px;
}

.section-title {
    display: flex;
    justify-content: center;
    font-size: 36px;
    color: #2b2d42;
}

.container {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 50px;
    padding-top: 75px;
}

.card {
    position: relative;
    width: 450px;
    height: 350px;
    overflow: hidden;
    border: 1px solid #ccc;
}

.card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.card:hover img {
    transform: scale(1.2);
}

.card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background-color: #2b2d42bd;
    color: #fff;
}

.card-content h3 {
    margin: 0;
    font-size: 18px;
}

.card-content p {
    margin: 5px 0 0;
    font-size: 14px;
}

@media only screen 
and (max-width: 1670px) {
    section {
        padding: 80px 150px 100px 150px;
    }

    .container {
        grid-template-columns: 1fr 1fr;
    }
}

@media only screen 
and (max-width: 1275px) {
    .container {
        grid-template-columns: 1fr 1fr;
    }

    .card {
        width: 375px;
        height: 275px;
    }
}

@media only screen 
and (max-width: 1120px) {
    section {
        padding: 80px 100px 100px 100px;
    }

    .container {
        grid-template-columns: 1fr;
    }

    .card {
        width: 500px;
        height: 400px;
    }
}

@media only screen 
and (max-width: 1075px) {
    section {
        padding: 200px 100px 100px 100px;
    }
}

@media only screen 
and (max-width: 725px) {
    section {
        padding: 200px 30px 100px 30px;
    }
}

@media only screen 
and (max-width: 650px) {
    section {
        padding: 100px 30px 100px 30px;
    }

    .card {
        width: 375px;
        height: 325px;
    }
}

@media only screen 
and (max-width: 455px) {
    section {
        padding: 100px 20px 100px 20px;
    }

    .card {
        width: 275px;
        height: 275px;
    }

    .card-content h3 {
        font-size: 15px;
    }

    .card-content p {
        font-size: 12px;
    }
}
</style>