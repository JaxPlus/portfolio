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
            <h1 class="text-7xl whitespace-pre-line m-2 text-center">{{ $t("hero_welcome") }}</h1>
            <p class="m-2 text-center w-4/5 md:w-fit">{{ $t("hero_subtitle") }}</p>
        </div>
        <About id="about" />
        <Projects id="projects" />
        <Timeline id="timeline" />
        <Contact id="contact" />
    </div>
    <Footer />
</template>
