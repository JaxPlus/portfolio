<script setup lang="ts">

import Project from "./Project.vue";
</script>

<template>
    <div class="w-full min-h-screen">
        <h2 class="m-2 text-4xl text-center">{{ $t("projects_title") }}</h2>
        <div class="m-2 grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <Project />
            <Project />
            <Project />
            <Project />
        </div>
    </div>
</template>