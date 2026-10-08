<script setup lang="ts">

import LanguageSwitcher from "./LanguageSwitcher.vue";
</script>

<template>
    <nav class="flex items-center justify-between">
        <RouterLink to="/">{{ $t("home") }}</RouterLink>
        <language-switcher class="px-2" />
    </nav>
</template>