import i18next from 'i18next'
import I18NextVue from 'i18next-vue'

i18next
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    hero_welcome: "Hi,\n I'm Jan Greń!",
                    hero_subtitle: "I’m aspiring video game programmer, that wants to create and share ideas and worlds.",
                    about: "About",
                    about_desc: "I'm programmer from Poland, I've experience in creating websites and data bases. I've learned those concepts in technical school and during my placements as well as on my own.\n\n I have experience in creating websites with Vue.js, and building API and backend with Java and Kotlin. In school we also used Android Studio to develop mobile apps and during my placements I worked on project developed with Vue to website and mobile.\n\n I aim to become game developer to create and share my ideas. I hope that my creations will inspire and motivate someone in the same way that I was.",
                    projects_title: "Projects",
                    scribble_attack_project_desc: "Game created for game jam with team.",
                    food_factory_project_desc: "Game created for school project.",
                    flash_project_desc: "Website for school project with database integration.",
                    anime_recommendations_desc: "Personal project created to learn api.",
                    more_projects_github: "View all GitHub projects",
                    more_projects_disroot: "View all Disroot projects",
                    timeline_education: "Education",
                    timeline_experience: "Experience",
                    title_edu_1: "Wyższa Szkoła Informatyki i Zarządzania",
                    date_edu_1: "10.2026 — Present",
                    desc_edu_1a: "As of writing this I will start my journey in this collage and I hope it will be good!",
                    title_edu_2: "Zespół Szkół im. Władysława Szybińskiego w Cieszynie",
                    date_edu_2: "09.2021 — 04.2026",
                    desc_edu_2a: "I learned basic programming concepts here and met fantastic people.",
                    title_exp_1: "DM System Dawid Macura",
                    date_exp_1: "03.2024",
                    desc_exp_1a: "First time doing remote work.",
                    desc_exp_1b: "Learned about Java and Spring Boot in API and backend development.",
                    title_exp_2: "Rocksoft",
                    date_exp_2: "05.2023",
                    desc_exp_2a: "First placements during my school, learned about working in a team and in professional environment",
                    desc_exp_2b: "Learned about Vue in mobile and web development.",
                    contact_title: "Contact",
                    contact_name: "Your name:",
                    contact_email: "Your email:",
                    contact_message: "Your message:",
                    contact_send: "Send",
                }
            },
            pl: {
                translation: {
                    hero_welcome: "Hej,\n nazywam się Jan Greń!",
                    hero_subtitle: "Chcę zostać programistą gier wideo, który będzie tworzył i dzielił się swoimi pomysłami i światami.",
                    about: "O mnie",
                    about_desc: "Jestem programistą z Polski, mam doświadczenie w tworzeniu stron internetowych i baz danych. Uczyłem się tych konceptów w technikum i podczas moich praktyk zawodowych jak i sam z siebie.\n\n Mam doświadczenie w tworzeniu stron internetowych przy użyciu Vue.js oraz w budowaniu API i backendu w językach Java i Kotlin. W szkole korzystałem również z Android Studio do tworzenia aplikacji mobilnych, a podczas praktyk pracowałem nad projektem obejmującym zarówno stronę internetową, jak i aplikację mobilną, realizowanym w technologii Vue.\n\n Chcę zostać twórcą gier, aby dzielić się swoimi pomysłami. Mam nadzieję, że moje dzieła kogoś zainspirują i zmotywują tak samo jak mnie.",
                    projects_title: "Projekty",
                    scribble_attack_project_desc: "Gra stworzona na game jam w zespole.",
                    food_factory_project_desc: "Gra stworzona jako projekt z szkoły.",
                    flash_project_desc: "Strona na projekt z szkoły z integracją z bazą danych.",
                    anime_recommendations_desc: "Personalny projekt stworzony aby nauczyć się api.",
                    more_projects_github: "Zobacz więcej projektów na GitHub",
                    more_projects_disroot: "Zobacz więcej projektów na Disroot",
                    timeline_education: "Edukacja",
                    timeline_experience: "Doświadczenie",
                    title_edu_1: "Wyższa Szkoła Informatyki i Zarządzania",
                    date_edu_1: "10.2026 — Teraz",
                    desc_edu_1a: "Zaczynam uczyć się na tej uczelni i mam nadzieję, że będzie dobrze!",
                    title_edu_2: "Zespół Szkół im. Władysława Szybińskiego w Cieszynie",
                    date_edu_2: "09.2021 — 04.2026",
                    desc_edu_2a: "Nauczyłem się podstaw programowania i poznałem wiele wspaniałych ludzi.",
                    title_exp_1: "DM System Dawid Macura",
                    date_exp_1: "03.2024",
                    desc_exp_1a: "Pierwszy raz w pracy zdalnej.",
                    desc_exp_1b: "Nauczyłem się o Javie i Spring Boot'ie, żeby stworzyć API i backend.",
                    title_exp_2: "Rocksoft",
                    date_exp_2: "05.2023",
                    desc_exp_2a: "Moje pierwsze praktyki, nauczyłem się pracować w zespole i w profesjonalnym środowisku.",
                    desc_exp_2b: "Zdobyłem wiedzę na temat Vue w kontekście tworzenia aplikacji mobilnych i internetowych.",
                    contact_title: "Kontakt",
                    contact_name: "Imię:",
                    contact_email: "Email:",
                    contact_message: "Wiadomość:",
                    contact_send: "Wyślij",
                }
            }
        }
    });

// @ts-ignore
export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
