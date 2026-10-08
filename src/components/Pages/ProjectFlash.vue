<script setup lang="ts">
import ProjectsNavBar from "../ProjectsNavBar.vue";
import ProjectDesc from "../ProjectDesc.vue";
</script>

<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
        <ProjectsNavBar class="absolute right-4 top-2" />
        <h2 class="my-2 text-4xl">Project Flash</h2>
        <div class="w-3/4 md:w-3/5 h-70 md:h-120 m-2 mb-4 rounded-2xl bg-[url('./assets/projects/projectflash.png')] bg-no-repeat bg-cover bg-center">

        </div>
        <ProjectDesc :description="$t('project_flash_page_desc')" :tags="['Vue', 'TypeScript', 'Supabase', 'Kotlin', 'API']" />
    </div>
</template>