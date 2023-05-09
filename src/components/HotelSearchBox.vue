<template>
    <div class="search-box">
        <div class="location">
            <AutoComplete v-model="valueLocation" placeholder="Location" :suggestions="itemsLocation" @complete="search" :input-style="widthLocationBar[currentWidth]"/>
        </div>
        <div class="arrival">
            <Calendar v-model="dateArrival" placeholder="arrival" show-icon showButtonBar dateFormat="dd/mm/yy" :input-style="widthCalendarBar[currentWidthForDefaults]"/>
        </div>
        <div class="departure">
            <Calendar v-model="dateDeparture" placeholder="departure" show-icon showButtonBar dateFormat="dd/mm/yy" :input-style="widthCalendarBar[currentWidthForDefaults]"/>
        </div>
        <div class="guests">
            <Dropdown v-model="selectedGuestAmount" editable :options="amountGuests" placeholder="Guests" :input-style="widthDropdownBar[currentWidthForDefaults]"/>
        </div>
        <div class="price">
            <div class="min-price">
                <InputNumber v-model="valuePrice[0]" :minFractionDigits="0" mode="currency" currency="EUR" :min="0" :max="1000"
                 :input-style="widthPriceInputBar[currentWidthForDefaults]"/>
            </div>
            <div class="max-price">
                <InputNumber v-model="valuePrice[1]" :minFractionDigits="0" mode="currency" currency="EUR" :min="0" :max="1000"
                 :input-style="widthPriceInputBar[currentWidthForDefaults]"/>
            </div>
            <div class="slider-price">
                <Slider v-model="valuePrice" range :max="1000" styl/>
            </div>
        </div>
    </div>
    <div class="submit-button">
        <Button>
            <p>Search &nbsp;</p>
            <i class="pi pi-search"></i>
        </Button>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import AutoComplete from 'primevue/autocomplete';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Slider from 'primevue/slider';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const widthLocationBar = [{ width: '538px'}, {width: '339px'}];
const widthCalendarBar = [{ width: '120px'}, {width: '290px'}];
const widthDropdownBar = [{ width: '85px'}, {width: '288px'}];
const widthPriceInputBar = [{ width: '153px'}, {width: '75px'}, {width: '80px'}];
const currentWidth = ref(0);
const currentWidthForDefaults = ref(0);

const valueLocation = ref("");
const itemsLocation = ref([]);

const dateArrival = ref();
const dateDeparture = ref();

const selectedGuestAmount = ref();
const amountGuests = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const valuePrice = ref([0, 600]);

onMounted(() => {
    window.addEventListener('resize', updateWidth);
    window.addEventListener('load', updateWidth);
    window.addEventListener('DOMContentLoaded', updateWidth);
});

function updateWidth() {
    if (window.innerWidth <= 430) {
        currentWidth.value = 2
        currentWidthForDefaults.value = 2
    } else if (window.innerWidth <= 650) {
        currentWidth.value = 1
        currentWidthForDefaults.value = 1
    } else {
        currentWidth.value = 0
        currentWidthForDefaults.value = 0
    }
}

const search = () => {
    itemsLocation.value = ['Amsterdam', 'Rotterdam', 'Enschede', 'Utrecht', 'Den Haag', 'Zoetermeer', 'Heerhugowaard'];
}
</script>

<style scoped>
.search-box {
    display: grid;
    grid-template-columns: 1.1fr 1.1fr 0.8fr; 
    grid-template-rows: 1.1fr 0.8fr 1.1fr; 
    gap: 0 20px;
    grid-template-areas: 
    "location location location"
    "arrival departure people"
    "price price price"; 
    margin-top: 10px;
    width: 600px;
    height: 300px;
    padding: 5px 30px;
    border: 1px solid #8D99AE;
    background-color: white;
    font-size: 18px;
    box-shadow: 0 3px 10px #00000033;
}

.location { grid-area: location; place-self: center; }
.arrival { grid-area: arrival; }
.departure { grid-area: departure; }
.guests { grid-area: people; }

.price {
    grid-area: price;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "min-price max-price"
    "slider-price slider-price";
}

.min-price { grid-area: min-price; justify-self: start; }
.max-price { grid-area: max-price; justify-self: end; }
.slider-price { grid-area: slider-price; padding-top: 20px; }

.submit-button {
    margin-top: 10px;
}

p {
    margin: 0;
    font-family: Poppins, arial, helvetica;
}

@media only screen 
and (max-width: 650px) {
    .search-box {
        display: flex;
        flex-direction: column;
        gap: 20px; 
        width: 400px;
        height: 400px;
        margin-top: 10px;
        padding: 30px;

        grid-template-columns: unset; 
        grid-template-rows: unset; 
        grid-template-areas: none;
    }

    .arrival { grid-area: arrival; place-self: center; }
    .departure { grid-area: departure; place-self: center; }
    .guests { grid-area: people; place-self: center; }
}

@media only screen 
and (max-width: 430px) {
    .search-box {
        width: 280px;
        font-size: 18px;
    }
}
</style>