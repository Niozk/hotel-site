<template>
    <NavBar />
    <SideMenu />
    <LanguageModal />
    <RouterView/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideMenu from './components/SideMenu.vue';
import LanguageModal from './components/LanguageModal.vue';
</script>

<style scoped>
</style>