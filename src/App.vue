<template>
    <div>
        <NavBar />
        <div class="sticky-fade"><div class="side-1"></div><div class="side-2"></div></div>
    </div>
    <IntroSection/>
    <SideMenu />
    <LanguageModal />
    <RouterView/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideMenu from './components/SideMenu.vue';
import LanguageModal from './components/LanguageModal.vue';
import IntroSection from './components/IntroSection.vue';
</script>

<style scoped>
.sticky-fade {
    display: grid; 
    grid-template-columns: 0.8fr 1.2fr; 
    grid-template-rows: 1fr;
    height: 100px;
}

.side-1 {
    background-color: #ef233c;
}
</style>