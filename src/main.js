import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import "./assets/flag-icons-main/css/flag-icons.min.css";

import PrimeVue from 'primevue/config'
import "./assets/theme.css"
import "primevue/resources/primevue.min.css"
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')


// PRIMEVUE IMPORTS

import Dialog from 'primevue/dialog';
app.component('Dialog', Dialog);

import AutoComplete from 'primevue/autocomplete';
app.component('AutoComplete', AutoComplete);

import Calendar from 'primevue/calendar';
app.component('Calendar', Calendar);

import Dropdown from 'primevue/dropdown';
app.component('Dropdown', Dropdown);

import Slider from 'primevue/slider';
app.component('Slider', Slider);

import InputNumber from 'primevue/inputnumber';
app.component('InputNumber', InputNumber);

import Button from 'primevue/button';
app.component('Button', Button);