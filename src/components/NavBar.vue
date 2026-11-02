<script setup lang="ts">
import LanguageSwitcher from "./LanguageSwitcher.vue";
</script>

<template>
    <nav class="flex items-center justify-between">
        <a class="px-2" href="#about">{{ $t("about").toLowerCase() }}</a>
        <a class="px-2" href="#projects">{{ $t("projects_title").toLowerCase() }}</a>
        <a class="px-2" href="#timeline">timeline</a>
        <a class="px-2" href="#contact">{{ $t("contact_title").toLowerCase() }}</a>
        <language-switcher class="px-2" />
    </nav>
</template>