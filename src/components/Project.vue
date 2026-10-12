<script setup lang="ts">
import Tag from "./Tag.vue";

const props = defineProps<{
    projectRoute: string,
    projectTitle: string,
    projectDescription: string,
    tags: string[],
    imgPath: string,
    repoLink?: string,
    liveLink?: string,
}>()

</script>

<template>
    <div :class="imgPath" class="w-72 md:min-w-88 h-52 md:h-60 m-2 relative rounded-2xl bg-no-repeat bg-cover bg-center">
        <RouterLink :to="projectRoute" class="absolute inset-0 z-10 rounded-2xl" :aria-label="projectTitle" />
        <div class="w-full p-2 absolute rounded-b-2xl bottom-0 z-20 pointer-events-none bg-linear-to-t from-black to-transparent">
            <h3 class="mx-1">{{ projectTitle }}</h3>
            <p class="mx-1 text-sm">{{ projectDescription }}</p>
            <div class="my-2">
                <Tag v-for="tag in tags" :key="tag">
                    {{ tag }}
                </Tag>
            </div>
            <div>
                <a v-if="repoLink" class="mx-2 text-sm pointer-events-auto" :href="repoLink" target="_blank" rel="noopener noreferrer">Repo</a>
                <a v-else class="mx-2 text-gray-600 text-sm">Repo</a>
                <a v-if="liveLink" class="text-sm pointer-events-auto" :href="liveLink" target="_blank" rel="noopener noreferrer">Live</a>
                <a v-else class="text-gray-600 text-sm">Live</a>
            </div>
        </div>
    </div>
</template>