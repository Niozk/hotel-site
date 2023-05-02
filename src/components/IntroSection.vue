<template>
    <section>
        <div class="welcome-container">
            <p>Welcome to Hotel Site</p>
        </div>
        <div class="hotel-search-container">
            <p>Find your perfect apartment</p>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
section {
    display: grid; 
    grid-template-columns: 0.8fr 1.2fr; 
    grid-template-rows: 1fr; 
    height: 380px;
}

.welcome-container {
    display: flex;
    padding: 85px 0 0 70px;
    font-size: 42px;
    background-color: #ef233c;
    color: white;
    text-align: center;
}

.hotel-search-container {
    display: flex;
    justify-content: center;
    font-size: 24px;
    color: #2B2D42;
}

@media only screen 
and (max-width: 1460px) {
    .welcome-container {
        padding-left: 35px;
        font-size: 32px;
    }
}

@media only screen 
and (max-width: 1070px) {

}

</style>