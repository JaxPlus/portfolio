<script setup lang="ts">
import Tag from "./Tag.vue";

const props = defineProps<{
    type: "exp" | "edu",
    title: string,
    jobPost?: string,
    date: string,
    description: string[],
    tags?: string[],
}>()
</script>

<template>
    <div class="w-36 md:w-87 min-h-34 md:min-h-40 relative m-2 mx-6 p-4 rounded-2xl bg-red-2 border-2">
        <div v-if="props.type == 'edu'" class="h-6 w-6 absolute flex justify-center items-center rounded-full left-[-2.365rem] border border-red bg-dark-red/50">
            <div class="h-2 w-2 bg-red rounded-full" />
        </div>
        <div v-else class="h-6 w-6 absolute flex right-[-2.365rem] justify-center items-center rounded-full border border-red bg-dark-red/50">
            <div class="h-2 w-2 bg-red rounded-full" />
        </div>
        <h2>{{ title }}</h2>
        <p class="text-sm">{{ jobPost }}</p>
        <p class="text-xs">{{ date }}</p>
        <ul class="list-disc ml-6 mt-2">
            <li v-for="item in description">{{ item }}</li>
        </ul>
        <div class="mt-4">
            <Tag v-for="tag in tags">
                {{ tag }}
            </Tag>
        </div>
    </div>
</template>