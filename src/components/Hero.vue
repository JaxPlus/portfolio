<script setup lang="ts">
import NavBar from "./NavBar.vue";
import Footer from "./Footer.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Timeline from "./Timeline.vue";
import Contact from "./Contact.vue";
</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <nav-bar class="absolute right-4 top-2"/>
        <div class="min-h-screen flex flex-col items-center justify-center">
            <h1 class="text-7xl whitespace-pre-line mb-2 md:m-2 text-center">{{ $t("hero_welcome") }}</h1>
            <p class="m-2 text-center w-4/5 md:w-fit">{{ $t("hero_subtitle") }}</p>
            <svg class="h-70 md:h-120 -z-50 absolute animate-write" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path class="fill-red/60" d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268c.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72a.504.504 0 0 0 .705-.16a68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182c.513-.02 1.098-.188 1.723-.49c1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744l1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892c.314-.378.585-.752.754-1.107c.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234l-1.171 1.196l-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393c-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806c.533-1.535 1.65-3.415 3.455-4.976c1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173" />
            </svg>
            <svg class="writing-line h-60 md:h-120 w-fit -z-50 absolute translate-y-30 -translate-x-65 md:translate-y-51 md:-translate-x-120" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xml:space="preserve"
                 style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <path class="stroke-red/60" d="M0.722,28.396C0.944,28.063 2.597,26.616 2.95,27.675C2.985,27.78 3.092,27.697 3.671,28.855C4.069,29.651 7.858,26.999 8.258,28.199C8.589,29.192 11.967,27.259 12.517,27.741C14.292,29.293 14.553,28.575 16.843,28.003C18.169,27.671 18.173,27.914 19.398,28.527C20.514,29.085 23.637,27.13 25.165,28.658C26.148,29.641 29.015,26.965 31.063,28.33C33.419,29.901 34.967,26.303 37.419,27.937C38.538,28.683 38.648,28.601 39.844,28.003C42.34,26.755 42.84,29.089 44.103,28.33C45.374,27.568 46.449,27.658 46.659,27.675C46.76,27.683 46.609,27.974 47.773,28.265C48.29,28.394 48.248,28.172 48.756,28.003C49.243,27.84 48.898,27.878 49.403,27.806" style="stroke-width:1px;"/>
            </svg>
        </div>
        <About id="about" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Contact id="contact" />
    </div>
    <Footer />
</template>

<style scoped>
.writing-line {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;

    stroke-dasharray: 20 5;
    animation: writing 4s linear infinite;
}

@keyframes writing {
    to {
        stroke-dashoffset: 25;
    }
}
</style>