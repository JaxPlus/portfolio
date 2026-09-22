<script setup lang="ts">
import Project from "./Project.vue";
</script>

<template>
    <div class="w-full min-h-screen my-8 flex flex-col items-center justify-center">
        <h2 class="m-2 text-4xl text-center">{{ $t("projects_title") }}</h2>
        <div class="w-full m-2 p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Project project-title="scribble attack!" :project-description="$t('scribble_attack_project_desc')"
                     :tags="[
                         'Godot',
                         'GDScript'
                     ]"
                     live-link="https://carnabiz.itch.io/scribble-attack" class="place-self-end" />
            <Project project-title="Food Factory Game" :project-description="$t('food_factory_project_desc')"
                     :tags="[
                         'Unity',
                         'C#',
                         'Aseprite'
                     ]"
                     repo-link="https://github.com/JaxPlus/FoodFactoryGame" />
            <Project project-title="Project Flash" :project-description="$t('flash_project_desc')"
                     :tags="[
                         'Vue',
                         'TypeScript',
                         'Supabase',
                         'Kotlin',
                     ]"
                     repo-link="https://github.com/JaxPlus/ProjectFlash" class="place-self-end" />
            <Project project-title="Anime Recommendations" :project-description="$t('anime_recommendations_desc')"
                     :tags="[
                         'Vue',
                         'TypeScript',
                     ]"
                     repo-link="https://github.com/JaxPlus/Anime-Recommendations" live-link="https://anime-recommendations-pl.netlify.app/" />
        </div>
        <a href="https://github.com/JaxPlus?tab=repositories" target="_blank" class="w-fit flex justify-center items-center cursor-pointer group">
            {{ $t("more_projects_github") }}
            <svg class="h-5 w-5 ml-1 transition-all group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />
            </svg>
        </a>
<!--        <a href="https://git.disroot.org/JaxPlus?tab=repositories" target="_blank" class="w-fit flex justify-center items-center cursor-pointer group">-->
<!--            {{ $t("more_projects_disroot") }}-->
<!--            <svg class="h-5 w-5 ml-1 transition-all group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
<!--                <path d="M0 0h24v24H0z" fill="none" />-->
<!--                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />-->
<!--            </svg>-->
<!--        </a>-->
    </div>
</template>