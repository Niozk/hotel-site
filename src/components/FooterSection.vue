<template>
    <footer>
        <div class="about-us">
            <p>About us</p>
            <ul>
                <li v-for="item in aboutUsList"><a :href="item.href">{{ item.text }}</a></li>
            </ul>
        </div>
        <div class="service">
            <p>Service</p>
            <ul>
                <li v-for="item in serviceList"><a :href="item.href">{{ item.text }}</a></li>
            </ul>
        </div>
        <div class="social-media">
            <p>Social media</p>
            <ul class="social-media-list">
                <li><a href="#"><i class="icon-twitter"></i></a></li>
                <li><a href="#"><i class="icon-facebook"></i></a></li>
                <li><a href="#"><i class="icon-instagram"></i></a></li>
                <li><a href="#"><i class="icon-youtube"></i></a></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const aboutUsList = ref([
    {text: 'Contact', href: '#'},
    {text: 'Travel directions', href: '#'},
    {text: 'Exclusive Program', href: '#'},
    {text: 'Partners', href: '#'}
])

const serviceList = ref([
    {text: 'Cancellation policy', href: '#'},
    {text: 'Newsletter', href: '#'},
    {text: 'Privacy Statement', href: '#'}
])
</script>

<style scoped>
footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 125px 600px 125px 125px;
    white-space: nowrap;
    background-color: #2B2D42;
}

p {
    font-weight: bold;
    color: white;
}

ul {
    padding: 0;
}

li {
    padding: 3px 0;
    list-style-type: none;
}

a {
    text-decoration: none;
    font-size: 14px;
    color: white;
}

.social-media-list {
    display: flex;
    gap: 20px;
}

i {
    font-size: 20px;
}

@media only screen 
and (max-width: 1300px) {
    footer {
        padding: 125px 300px 125px 75px;
    }
}

@media only screen 
and (max-width: 1000px) {
    footer {
        padding: 125px 100px 125px 50px;
    }
}

@media only screen 
and (max-width: 700px) {
    footer {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 50px;
    }
}

@media only screen 
and (max-width: 400px) {
    footer {
        padding: 125px 100px 125px 20px;
        gap: 15px;
    }
}
</style>