<template>
    <header>
        <nav>
            <ul class="nav-list-1">
                <li class="logo"><a href="#" @click="linkToHome"><img src="../assets/logo.png" alt="Logo of Hotel Site"></a></li>
            </ul>
            <ul class="nav-list-2" v-if="isNavVisible">
                <li v-for="item in navList2Items" :key="item"><a :href="item.href" @click="item.click">{{ item.text }}</a></li>
            </ul>
            <ul class="nav-list-3">
                <li v-if="isNavVisible"><button class="language" @click="store.languageVisible = true">
                    <img class="language-img" src="../assets/world_icon.png" alt="World Icon">
                    <p>{{ store.getCurrentLanguage() }}</p>
                </button></li>
                <AccountButton/>
                <li v-if="!isNavVisible"><button id="open-btn" @click="openSidemenu()"><i class="icon-align-justify"></i></button></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/store.js'
import { useRouter } from 'vue-router';
import AccountButton from './AccountButton.vue';

const store = useStore();
const router = useRouter();
const navList2Items = store.navList2Items;
const isNavVisible = ref(window.innerWidth >= 1000);

onMounted(() => {
    window.addEventListener('resize', () => {
        isNavVisible.value = window.innerWidth >= 1000;
    });
});

function openSidemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.width = "285px";
    sidemenu.style.boxShadow = "0 3px 10px rgb(0 0 0 / 0.2)";
    sidemenu.style.opacity = "1";
}

function linkToHome() {
  router.push('/');
}
</script>

<style scoped>
header {
    height: 100px;
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: white;
}

nav {
    display: flex;
    margin: 0 50px;
    background-color: transparent;
    font-weight: bold;
}

ul {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
}

.logo img {
    width: 45px;
}

a {
    white-space: nowrap;
    text-decoration: none;
    color: #2B2D42;
}

button {
    padding: 0;
    border: 0;
    background-color: transparent;
    color: #2B2D42;
    font: inherit;
    font-size: 16px;
    cursor: pointer;
}

li {
    padding: 20px 18px;
    font-size: 16px;
    list-style-type: none;
    transition: 0.7s;
}

li:hover {
    background-color: #0000001a;
}

.nav-list-2 {
    margin-left: 50px;
    flex-grow: 1;
}

.nav-list-3 {
    margin-right: 75px;
}

.logo:hover {
    background-color: #00000000;
}

.language {
    display: flex;
    align-items: center;
    gap: 10px;
}

.language-img {
    width: 20px;
}

p {
    margin: 0;
}

.icon-align-justify {
    font-size: 18px;
}

@media only screen 
and (max-width: 1000px) {
    nav {
        justify-content: space-between;
        margin: 0 25px;
    }

    .nav-list-3 {
        margin-right: 0;
    }
}
</style>