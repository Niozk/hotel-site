<template>
    <Dialog v-model:visible="store.languageVisible" modal header="Choose your language" :style="{ width: '50vw' }" :draggable="false" :breakpoints="{ '1150px': '75vw' }">
        <button v-for="item in languages" :class="{ 'selected': selectedLanguage === item }" @click="selectedLanguage = item">
            <i :class="item.flag"></i> &nbsp; {{ item.language }} 
        </button>
    </Dialog>
</template>

<script setup>
import { useStore } from '@/stores/store.js'
import { ref } from 'vue'
import Dialog from 'primevue/dialog';

const store = useStore();
const selectedLanguage = ref(null);
const languages = ref([
    {flag: 'fi fi-gb', language: 'English (UK)'},
    {flag: 'fi fi-us', language: 'English (US)'},
    {flag: 'fi fi-nl', language: 'Nederlands'},
    {flag: 'fi fi-de', language: 'Deutsch'},
    {flag: 'fi fi-fr', language: 'Français'},
    {flag: 'fi fi-es', language: 'Español'}
])
</script>

<style scoped>
button {
    margin: 15px 5px;
    padding: 15px 10px;
    width: 165px;
    border: 0;
    text-align: left;
    background-color: transparent;
    color: #2B2D42;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

button:hover {
    background-color: #0000001a;
}

.selected {
    background-color: #c8ffc8;
}

.selected:hover {
    background-color: #a8ffa863;
}

i {
    font-size: 22px;
    color: #2B2D42;
}
</style>