<template>
    <aside id="sidemenu">
        <button class="close-btn" @click="closeSidemenu()">&times;</button>
        <ul>
            <li v-for="item in navList2Items" :key="item"><a :href="item.href" @click="item.click">{{ item.text }}</a></li>
            <li><button class="language" @click="store.languageVisible = true">
                <p>{{ store.getCurrentLanguage() }}</p>
                <img class="language-img" src="../assets/world_icon.png" alt="World Icon">
            </button></li>
        </ul>
    </aside>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from '@/stores/store.js';

const store = useStore();
const navList2Items = store.navList2Items;

onMounted(() => {
    closeSidemenuOnClick();
});

function closeSidemenu() {
    const sidemenu = document.getElementById("sidemenu");
    sidemenu.style.width = "0";
    sidemenu.style.opacity = "0";

    setTimeout(() => {
        sidemenu.style.boxShadow = "0";
        document.body.style.marginRight = "0";
    }, 500);
}

function closeSidemenuOnClick() {
    document.addEventListener("click", function(event) {
        const sidemenu = document.getElementById("sidemenu");
        const openBtn = document.getElementById("open-btn");
        const languageDialog = document.getElementById("language-dialog");
        if (sidemenu && openBtn && languageDialog) {
            if (!sidemenu.contains(event.target) && !openBtn.contains(event.target) && !languageDialog.contains(event.target)) {
            }
        } else if (sidemenu && openBtn) {
            if (!sidemenu.contains(event.target) && !openBtn.contains(event.target)) {
                closeSidemenu();
            }
        }
    })
}
</script>

<style scoped>
aside {
    display: flex;
    flex-direction: column; 
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    width: 0;
    height: 100%;
    overflow-x: hidden;
    background-color: white;
    font-size: 16px;
    font-weight: bold;
    opacity: 0;
    transition: 1s;
}

a {
    white-space: nowrap;
    color: #2B2D42;
    text-decoration: none;
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

.close-btn {
    align-self: flex-end;
    margin: 20px;
    padding: 0 10px;
    font-size: 36px;
    color: #2B2D42;
}

.close-btn:hover {
    background-color: #0000001a;
    transition: 0.7s;
}

ul {
    display: inline-block;
    margin-right: 30px;
}

li {
    margin: 10px 0;
    padding: 8px 15px 8px 12px;
    list-style-type: none;
    transition: 0.7s;
}

li:hover {
    background-color: #0000001a;
}

.language {
    display: flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
}

.language-img {
    width: 20px;
}

p {
    margin: 0;
    color: #2B2D42;
}

@media only screen 
and (max-width: 450px) {
    aside {
        max-width: 70%;
    }
}
</style>