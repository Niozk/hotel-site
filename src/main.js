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