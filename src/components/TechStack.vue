<script setup lang="ts">
import Tooltip from "./Tooltip.vue";
import {ref} from "vue";

const mouseOver = ref(false);
const isTooltipShown = ref([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
]);

function showTooltip(tooltip: string): void {
    if (mouseOver.value)
        return;

    mouseOver.value = true;

    switch (tooltip) {
        case "JavaScript":
            isTooltipShown.value[0] = true;
            break;
        case "TypeScript":
            isTooltipShown.value[1] = true;
            break;
        case "CSS":
            isTooltipShown.value[2] = true;
            break;
        case "Tailwind":
            isTooltipShown.value[3] = true;
            break;
        case "HTML":
            isTooltipShown.value[4] = true;
            break;
        case "Vue":
            isTooltipShown.value[5] = true;
            break;
        case "Git":
            isTooltipShown.value[6] = true;
            break;
        case "Godot":
            isTooltipShown.value[7] = true;
            break;
        case "Kotlin":
            isTooltipShown.value[8] = true;
            break;
    }
}

function hideTooltip(): void {
    for (let i = 0; i < isTooltipShown.value.length; i++) {
        isTooltipShown.value[i] = false;
    }
    mouseOver.value = false;
}

</script>

<template>
    <div class="w-3/4 mt-8 m-4 rounded-lg border-2 border-white grid grid-cols-9 justify-items-center">
        <!--    JS    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('JavaScript')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.5 11a1.5 1.5 0 0 0 3 0V7.5m5 1.25c0-.69-.537-1.25-1.2-1.25h-.6c-.663 0-1.2.56-1.2 1.25S10.037 10 10.7 10h.6c.663 0 1.2.56 1.2 1.25s-.537 1.25-1.2 1.25h-.6c-.663 0-1.2-.56-1.2-1.25" />
                    <path d="M4 1.5h8c1.385 0 2.5 1.115 2.5 2.5v8c0 1.385-1.115 2.5-2.5 2.5H4A2.495 2.495 0 0 1 1.5 12V4c0-1.385 1.115-2.5 2.5-2.5" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[0]">JavaScript</Tooltip>
            </Transition>
        </div>
        <!--    TS    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('TypeScript')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5" />
                    <path d="M12.5 8.75c0-.69-.54-1.25-1.2-1.25h-.6c-.66 0-1.2.56-1.2 1.25S10.04 10 10.7 10h.6c.66 0 1.2.56 1.2 1.25s-.54 1.25-1.2 1.25h-.6c-.66 0-1.2-.56-1.2-1.25m-3-3.75v5M5 7.5h3" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[1]">TypeScript</Tooltip>
            </Transition>
        </div>
        <!--    CSS    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('CSS')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 1.5h8A2.5 2.5 0 0 1 14.5 4v8a2.5 2.5 0 0 1-2.5 2.5H4A2.5 2.5 0 0 1 1.5 12V4A2.5 2.5 0 0 1 4 1.5" />
                    <path stroke-width=".814" d="M10.24 11.53c0 .58.438 1.038.96 1.035l.453-.004c.522-.003.949-.451.949-1.033c0-.58-.427-1.065-.95-1.065h-.451c-.523 0-.95-.486-.95-1.066s.427-1.038.95-1.038h.452c.522 0 .951.458.951 1.039M6.8 11.529c0 .58.438 1.04.96 1.036l.465-.004c.523-.003.936-.451.936-1.031s-.409-1.066-.931-1.066h-.47c-.522 0-.949-.485-.949-1.066c0-.58.427-1.037.95-1.037h.451c.523 0 .964.457.964 1.037M3.407 11.53c0 .58.438 1.052.96 1.052h.452c.522 0 .95-.457.95-1.038m.01-2.131c0-.58-.437-1.038-.96-1.038h-.451c-.523 0-.96.468-.96 1.05v2.118" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[2]">CSS3</Tooltip>
            </Transition>
        </div>
        <!--    TAILWIND    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('Tailwind')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="M8 2.5q-3 0-3.75 3.33C5 4.73 5.88 4.31 6.87 4.58c.58.16.98.62 1.43 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.63 1.25c-.57-.16-.97-.62-1.42-1.13C10.7 3.46 9.85 2.5 8 2.5m-3.75 6q-3 0-3.75 3.33c.75-1.1 1.63-1.52 2.63-1.25c.57.16.97.62 1.42 1.13c.74.83 1.6 1.79 3.45 1.79q3 0 3.75-3.33c-.75 1.1-1.63 1.52-2.62 1.25c-.58-.16-.98-.62-1.43-1.13c-.74-.83-1.6-1.79-3.45-1.79" />
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[3]">Tailwind</Tooltip>
            </Transition>
        </div>
        <!--    HTML    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('HTML')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="#f5a97f" d="M1.5 1.5h13L13 13l-5 2l-5-2z" />
                    <path stroke="#cad3f5" d="M11 4.5H5l.25 3h5.5l-.25 3l-2.5 1l-2.5-1l-.08-1" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[4]">HTML5</Tooltip>
            </Transition>
        </div>
        <!--    VUE    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('Vue')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 1.5h5.44L8 4.56L9.56 1.5H15l-6.99 13z" />
                    <path d="M12.05 1.73L8 9.28L3.95 1.73" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[5]">Vue</Tooltip>
            </Transition>
        </div>
        <!--    GIT    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('Git')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="#cad3f5" d="M8.5 10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m0-6a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m3 3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-4-2v4m-1-6l-1-1m4 4l-1-1" />
                    <path stroke="#f5a97f" d="m9.06 1.06l5.88 5.88a1.5 1.5 0 0 1 0 2.12l-5.88 5.88a1.5 1.5 0 0 1-2.12 0L1.06 9.06a1.5 1.5 0 0 1 0-2.12l5.88-5.88a1.5 1.5 0 0 1 2.12 0" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[6]">Git</Tooltip>
            </Transition>
        </div>
        <!--    GODOT    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('Godot')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="m1.5 11l2.5.5l.25 1h2l.5-1h2.5l.5 1h2l.25-1l2.5-.5m-13 1.25c0 2.25 2.74 3.25 6.5 3.25c3.75 0 6.5-1 6.5-3.25v-5L15.75 6L14.5 4L13 5.25L11.5 4l.5-1.5l-2.5-1L8.75 3h-1.5L6.5 1.5L4 2.5L4.5 4L3 5.25L1.5 4L.25 6L1.5 7.25zM8 7.5v2m-3.5 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[7]">Godot</Tooltip>
            </Transition>
        </div>
        <!--    KOTLIN    -->
        <div class="relative w-full flex justify-center items-center">
            <svg @mouseenter="showTooltip('Kotlin')" @mouseleave="hideTooltip()" class="h-6 md:h-8 m-1 md:m-2.5 hover:scale-120 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="#c6a0f6" d="M2.5 13.5h11L8 8" />
                    <path stroke="#f5a97f" d="M8.03 2.5h5.47l-8 8" />
                    <path stroke="#ed8796" d="M2.5 13.5V8" />
                    <path stroke="#7dc4e4" d="M8 2.5H2.5V8l3-2.5" />
                </g>
            </svg>
            <Transition>
                <Tooltip v-if="isTooltipShown[8]">Kotlin</Tooltip>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>