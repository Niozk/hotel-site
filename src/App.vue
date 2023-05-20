<template>
    <div>
        <NavBar />
        <div class="sticky-fade"><div class="side-1"></div><div class="side-2"></div></div>
    </div>
    <IntroSection class="intro" />
    <SideMenu />
    <LanguageModal />
    <RouterView />
    <PaymentSection />
    <FooterSection />
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import { animate, scroll, stagger, spring } from "motion"
import NavBar from './components/NavBar.vue';
import SideMenu from './components/SideMenu.vue';
import LanguageModal from './components/LanguageModal.vue';
import IntroSection from './components/IntroSection.vue';
import PaymentSection from './components/PaymentSection.vue';
import FooterSection from './components/FooterSection.vue';


// onMounted(() => {
//     document.querySelectorAll("section > div").forEach((item) => {
//         scroll(animate(item, { opacity: [0, 1, 1, 0] }), {
//             target: item,
//             offset: ["start end", "end end", "start start", "end start"]
//         });
//     });
// });
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

@media only screen 
and (max-width: 1070px) {
    .sticky-fade {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        height: 100px;
        background-color: #ef233c;
    }

    .side-2 {
        background-color: #ef233c;
    }
}
</style>