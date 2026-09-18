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
                    about_desc: "I'm programmer from Poland, I've experience in creating websites and data bases. I've learned those concepts in technical school and during my placements as well as on my own.\n",
                    projects_title: "Projects",
                    more_projects: "View all projects",
                    timeline_education: "Education",
                    timeline_experience: "Experience",
                    title_edu_1: "Wyższa Szkoła Informatyki i Zarządzania",
                    date_edu_1: "10.2026 — Present",
                    title_edu_2: "Zespół Szkół im. Władysława Szybińskiego w Cieszynie",
                    date_edu_2: "09.2021 — 04.2026",
                    title_exp_1: "DM System Dawid Macura",
                    date_exp_1: "03.2024",
                    title_exp_2: "Rocksoft",
                    date_exp_2: "05.2023",
                }
            },
            pl: {
                translation: {
                    hero_welcome: "Hej,\n nazywam się Jan Greń!",
                    hero_subtitle: "Chcę zostać programistą gier wideo, który będzie tworzył i dzielił się swoimi pomysłami i światami.",
                    about: "O mnie",
                    about_desc: "Jestem programistą z Polski, mam doświadczenie w tworzeniu stron internetowych i baz danych. Uczyłem się tych konceptów w technikum i podczas moich praktyk zawodowych jak i sam z siebie.\n",
                    projects_title: "Projekty",
                    more_projects: "Zobacz więcej projektów",
                    timeline_education: "Edukacja",
                    timeline_experience: "Doświadczenie",
                    title_edu_1: "Wyższa Szkoła Informatyki i Zarządzania",
                    date_edu_1: "10.2026 — Teraz",
                    title_edu_2: "Zespół Szkół im. Władysława Szybińskiego w Cieszynie",
                    date_edu_2: "09.2021 — 04.2026",
                    title_exp_1: "DM System Dawid Macura",
                    date_exp_1: "03.2024",
                    title_exp_2: "Rocksoft",
                    date_exp_2: "05.2023",
                }
            }
        }
    });

// @ts-ignore
export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
