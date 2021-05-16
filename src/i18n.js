import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {TRANSLATIONS_VI} from "./localization/vi/translation";
import {TRANSLATION_EN} from "./localization/en/translation";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        lng: 'vi',
        fallbackLng: 'en',
        debug: true,
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: TRANSLATION_EN,
            },
            vi: {
                translation: TRANSLATIONS_VI
            },
        }
    });


export default i18n;