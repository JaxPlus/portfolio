<script setup lang="ts">
</script>

<template>
    <div class="cursor-pointer select-none">
        <p v-if="$i18next.resolvedLanguage == 'en'" @click="$i18next.changeLanguage('pl')">pl</p>
        <p v-else @click="$i18next.changeLanguage('en')">en</p>
    </div>
</template>