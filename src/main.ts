import { createApp } from 'vue'
import './style.css'
import i18n from "./i18n.ts";
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import Hero from "./components/Hero.vue";
import ScribbleAttack from "./components/Pages/ScribbleAttack.vue";
import FoodFactory from "./components/Pages/FoodFactory.vue";
import ProjectFlash from "./components/Pages/ProjectFlash.vue";
import AnimeRecommendations from "./components/Pages/AnimeRecommendations.vue";


const routes = [
    { path: '/', component: Hero },
    { path: '/scribble-attack', component: ScribbleAttack },
    { path: '/food-factory', component: FoodFactory },
    { path: '/project-flash', component: ProjectFlash },
    { path: '/anime-recommendations', component: AnimeRecommendations },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

i18n(createApp(App)).use(router).mount('#app')
