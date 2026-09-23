<script setup lang="ts">
const props = defineProps<{
    type: "exp" | "edu",
    title: string,
    date: string,
    description: string[],
}>()
</script>

<template>
    <div class="w-36 md:w-80 min-h-34 md:min-h-40 relative m-2 mx-6 p-4 rounded-2xl bg-black border-2">
        <div v-if="props.type == 'edu'" class="h-6 w-6 absolute flex justify-center items-center rounded-full left-[-2.365rem] border border-blue-700 bg-blue-900/50">
            <div class="h-2 w-2 bg-blue-900 rounded-full" />
        </div>
        <div v-else class="h-6 w-6 absolute flex right-[-2.365rem] justify-center items-center rounded-full border border-blue-700 bg-blue-900/50">
            <div class="h-2 w-2 bg-blue-900 rounded-full" />
        </div>
        <h2>{{ title }}</h2>
        <p class="text-[0.7rem]">{{ date }}</p>
        <ul class="list-disc ml-6">
            <li v-for="item in description">{{ item }}</li>
        </ul>
    </div>
</template>