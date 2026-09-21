<script setup lang="ts">
import LanguageSwitcher from "./LanguageSwitcher.vue";
</script>

<template>
    <nav class="flex items-center justify-between">
        <a class="px-2" href="#about">{{ $t("about") }}</a>
        <a class="px-2" href="#projects">{{ $t("projects_title") }}</a>
        <a class="px-2" href="#timeline">Timeline</a>
        <a class="px-2" href="#contact">{{ $t("contact_title") }}</a>
        <language-switcher class="px-2" />
    </nav>
</template>