<template>
    <li class="dropdown">
        <a href="#"><button><i class="icon-user"></i></button></a>
        <div class="dropdown-content">
            <a href="#">My Account</a>
            <a href="#">Reservations</a>
            <a href="#">Recent destinations</a>
        </div>
    </li>
</template>

<script setup>
</script>

<style scoped>
.dropdown {
    display: inline-block;
    position: relative;
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

.dropdown-content {
    display: none;
    position: absolute;
    left: auto;
    top: 65px;
    right: 0;
    min-width: 200px;
    z-index: 1;
    background-color: #f8f8f8;
    box-shadow: 0 8px 16px 0 #46464633;
}

.dropdown-content a {
    display: block;
    padding: 18px 16px;
    white-space: nowrap;
    color: #2B2D42;
    text-decoration: none;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content a:hover {
    background-color: #0000001a;
}

.icon-user {
    font-size: 20px;
}
</style>