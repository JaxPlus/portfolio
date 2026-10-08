<script setup lang="ts">
import Tag from "./Tag.vue";
const props = defineProps<{
    description: string;
    tags: Array<string>,
}>()
</script>

<template>
    <div class="w-3/4 md:w-3/5 border rounded-xl p-4 bg-red-2">
        <p class="mb-2">{{ description }}</p>
        <div>
            <Tag v-for="tag in tags">{{ tag }}</Tag>
        </div>
    </div>
</template>