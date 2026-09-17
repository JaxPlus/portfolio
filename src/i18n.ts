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
                }
            },
            pl: {
                translation: {
                    hero_welcome: "Hej,\n nazywam się Jan Greń!",
                    hero_subtitle: "Chcę zostać programistą gier wideo, który będzie tworzył i dzielił się swoimi pomysłami i światami.",
                    about: "O mnie",
                    about_desc: "Jestem programistą z Polski, mam doświadczenie w tworzeniu stron internetowych i baz danych. Uczyłem się tych konceptów w technikum i podczas moich praktyk zawodowych jak i sam z siebie.\n",
                    projects_title: "Projekty",
                }
            }
        }
    });

// @ts-ignore
export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
