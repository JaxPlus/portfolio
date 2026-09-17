<script setup lang="ts">
import TechStack from "./TechStack.vue";
</script>

<template>
    <div class="min-h-screen w-full flex flex-col justify-center items-center">
        <div class="flex justify-center items-center flex-col">
            <h2 class="text-4xl">{{ $t("about") }}</h2>
            <p class="w-3/4 md:w-96 m-2 whitespace-pre-line">{{ $t("about_desc") }}</p>
        </div>
        <TechStack />
    </div>
</template>