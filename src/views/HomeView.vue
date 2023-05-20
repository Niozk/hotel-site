<template>
    <section>
        <div class="scroll-fade">
            <CarouselSection />
        </div>
        <DealsSection />
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate, scroll } from "motion"
import CarouselSection from '../components/CarouselSection.vue';
import DealsSection from '../components/DealsSection.vue';

onMounted(() => {
    document.querySelectorAll("section > .scroll-fade").forEach((item) => {
        scroll(animate(item, { opacity: [0, 0, 1, 1, 0] }), {
            target: item,
            offset: ["start end", "end start"]
        });
    });
});
</script>

<style scoped>
</style>