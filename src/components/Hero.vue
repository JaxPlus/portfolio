<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <div class="flex flex-col justify-center">
        <nav-bar class="absolute right-4 top-2"/>
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-7xl whitespace-pre-line m-2 text-center">{{ $t("hero_welcome") }}</h1>
            <p class="m-2">{{ $t("hero_subtitle") }}</p>
        </div>
        <Footer />
    </div>
</template>
