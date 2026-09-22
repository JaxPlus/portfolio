<script setup lang="ts">
import Tag from "./Tag.vue";

const props = defineProps<{
    projectTitle: string,
    projectDescription: string,
    tags: string[],
    repoLink?: string,
    liveLink?: string,
}>()

</script>

<template>
    <div class="w-72 md:min-w-84 h-52 md:h-60 m-2 rounded-2xl bg-red">
        <div class="m-2">
            <h3>{{ projectTitle }}</h3>
            <p class="text-sm">{{ projectDescription }}</p>
            <div class="my-2">
                <Tag v-for="tag in tags">
                    {{ tag }}
                </Tag>
            </div>
            <a v-if="repoLink" class="mx-2 cursor-pointer text-sm" :href="repoLink" target="_blank">Repo</a>
            <a v-else class="mx-2 text-gray-600 text-sm">Repo</a>
            <a v-if="liveLink" class="cursor-pointer text-sm" :href="liveLink" target="_blank">Live</a>
            <a v-else class="text-gray-600 text-sm">Live</a>
        </div>
    </div>
</template>