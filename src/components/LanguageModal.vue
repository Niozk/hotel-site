<template>
    <Dialog id="language-dialog" v-model:visible="store.languageVisible" modal header="Choose your language" :style="{ width: '50vw' }" :draggable="false" 
    :dismissableMask="true" :breakpoints="{ '1150px': '75vw' }">
        <button v-for="item in store.languages" :class="{ 'selected': item.selected }" @click="selectLanguage(item)">
            <i :class="item.flag"></i> &nbsp;{{ item.language }}&nbsp;
            <i v-if="item.selected" class="icon-ok"></i>
        </button>
    </Dialog>
</template>

<script setup>
import { useStore } from '@/stores/store.js'
import Dialog from 'primevue/dialog';

const store = useStore();

function selectLanguage(selectedItem) {
    store.languages.forEach(item => {
        item.selected = item === selectedItem;
    });
}
</script>

<style scoped>
button {
    margin: 15px 5px;
    padding: 15px 10px;
    width: 200px;
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

.icon-ok {
    font-size: 18px;
}
</style>