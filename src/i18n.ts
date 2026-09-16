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
                    hero_subtitle: "I’m aspiring video game programmer, that wants to create and share ideas and worlds."
                }
            },
            pl: {
                translation: {
                    hero_welcome: "Hej,\n nazywam się Jan Greń!",
                    hero_subtitle: "Chcę zostać programistą gier wideo, który będzie tworzył i dzielił się swoimi pomysłami i światami."
                }
            }
        }
    });

// @ts-ignore
export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
