<template>
    <NavBar />
    <SideMenu />
    <RouterView/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import SideMenu from './components/SideMenu.vue';
</script>

<style scoped>
</style>