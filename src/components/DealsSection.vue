<template>
    <section class="scroll-fade-deals">
        <p class="section-title" id="section-title">Top deals of today</p>
        <div class="cards">
            <Card v-for="item in displayedCards">
                <template #header>
                    <img :src="item.img" alt="hotel kamer">
                </template>
                <template #title>
                    <p class="title">€ {{ item.price }}</p>
                </template>
                <template #subtitle>
                    <p class="subtitle">{{ item.city }}</p>
                </template>
                <template #content>
                    <a class="link" href="#">Click here</a>
                </template>
            </Card>
        </div>
        <Button v-if="showViewMoreButton" class="view-more-button" @click="showAllCards = !showAllCards">
                <p>{{ showAllCards ? 'View Less' : 'View More' }}</p>
        </Button>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { animate, scroll } from "motion"
import Card from 'primevue/card';
import Button from 'primevue/button';

const cardItems = ref([
    {price: '95', city: 'Amsterdam', img: 'assets/kamer_1.png'},
    {price: '130', city: 'Rotterdam', img: "assets/kamer_2.png"},
    {price: '105', city: 'Utrecht', img: "src/assets/kamer_4.png"},
    {price: '180', city: 'Amsterdam', img: 'src/assets/kamer_5.png'},
    {price: '220', city: 'Amsterdam', img: '../src/assets/kamer_6.png'},
    {price: '125', city: 'Den Haag', img: '../src/assets/kamer_7.png'},
    {price: '90', city: 'Enschede', img: '../src/assets/kamer_3.png'},
    {price: '135', city: 'Rotterdam', img: '../src/assets/kamer_8.png'}
])

const showAllCards = ref(false);

const windowWidth = ref(window.innerWidth);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener("resize", handleResize);

    document.querySelectorAll(".scroll-fade-deals").forEach((item) => {
        scroll(animate(item, { opacity: [0, 1, 1] }), {
            target: item,
            offset: ["start end", "end end"]
        });
    });
});

const displayedCards = computed(() => {
    if (windowWidth.value > 590) {
        return cardItems.value;
    } else {
        return showAllCards.value ? cardItems.value : cardItems.value.slice(0, 4);
    }
});

const showViewMoreButton = computed(() => {
    return windowWidth.value <= 590 && !showAllCards.value;
});
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    padding-bottom: 45px;
    background-color: #EF233C;
    color: white;
}

.section-title {
    padding-top: 35px;
    font-size: 34px;
}

.cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 50px;
    padding: 75px 120px;
}

img {
    width: 100%;
}

.title {
    display: flex;
    margin: 0;
    padding: 30px 0 0 15px;
    white-space: nowrap;
    font-size: 24px;
    font-family: Poppins, arial, helvetica;
}

.subtitle {
    display: flex;
    margin: 0;
    padding: 10px 0 0 15px;
    white-space: nowrap;
    font-family: Poppins, arial, helvetica;
}

.link {
    position: relative;
    margin: 0;
    padding: 10px 0 0 15px;
    white-space: nowrap;
    font-family: Poppins, arial, helvetica;
    text-decoration: none;
    color: #2B2D42;
}

.link:hover {
    color: #2b2d42af;
    transition: 0.6s ease;
}

.link::after {
    content: "";
    position: absolute;
    left: 8px;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: #2b2d42af;
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: bottom right;
}

.link:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.view-more-button {
    background-color: white;
    color: #2B2D42;
}

.view-more-button p {
    margin: 0;
    font-family: Poppins, arial, helvetica;
}

@media only screen 
and (max-width: 1630px) {
    .cards {
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
        padding: 75px 40px;
    }
}

@media only screen 
and (max-width: 1090px) {
    .title {
        padding: 30px 0 0 0;
        font-size: 22px;
    }

    .subtitle {
        padding: 10px 0 0 0;
    }

    .link {
        padding: 10px 0 0 0;
    }

    .link::after {
        left: 0px;
    }
}

@media only screen 
and (max-width: 950px) {
    .cards {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr; 
    }
}

@media only screen 
and (max-width: 590px) {
    .section-title {
        font-size: 30px;
    }

    .cards {
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
    }
}
</style>