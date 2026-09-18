<script setup lang="ts">
import TimelineEpisode from "./TimelineEpisode.vue";
</script>

<template>
    <div class="min-h-screen w-full mb-24">
        <h2 class="text-4xl text-center mb-6">Timeline</h2>
        <div class="w-full min-h-full relative">
            <div class="flex justify-center">
                <h3 class="w-full m-4 text-2xl text-end">{{ $t("timeline_experience") }}</h3>
                <h3 class="w-full m-4 text-2xl">{{ $t("timeline_education") }}</h3>
            </div>
            <div class="w-px h-[95%] absolute ml-auto mr-auto left-0 right-0 top-20 bg-white" />
            <div class="grid grid-cols-2">
                <div /> <TimelineEpisode :title="$t('title_edu_1')" :date="$t('date_edu_1')" type="edu" />
                <TimelineEpisode :title="$t('title_exp_1')" :date="$t('date_exp_1')" type="exp" class="place-self-end" /> <div />
                <TimelineEpisode :title="$t('title_exp_2')" :date="$t('date_exp_2')" type="exp" class="place-self-end" /> <div />
                <div /> <TimelineEpisode :title="$t('title_edu_2')" :date="$t('date_edu_2')" type="edu" />
            </div>
        </div>
    </div>
</template>