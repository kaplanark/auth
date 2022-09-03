import { createI18n } from 'vue-i18n'
import tr from './json/tr.json';
import en from './json/en.json';

const messages = {tr,en};
if (!localStorage.getItem("locale")) {
    let browserLang = Object.keys(messages).find((lang) => { return lang == navigator.language.substring(0, 2) })
    browserLang ? localStorage.setItem("locale", browserLang) : localStorage.setItem("locale", "en")
};

const i18n = createI18n({
    locale: localStorage.getItem("locale"),
    fallbackLocale: 'tr',
    messages,
    globalInjection: true,
    legacy: false,
});

export default i18n