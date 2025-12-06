import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import {
    education_de,
    education_en,
    experience_de,
    experience_en,
    hero_de,
    hero_en,
    navbar_de,
    navbar_en
} from "@/locales";

export const resources = {
    en: {
        hero: hero_en,
        navbar: navbar_en,
        experience: experience_en,
        education: education_en
    },
    de: {
        hero: hero_de,
        navbar: navbar_de,
        experience: experience_de,
        education: education_de
    },
} as const;

await i18n
    //.use(Backend)
    //.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: "en",
        ns: ["hero", "navbar", "experience", "education"],
        defaultNS: "navbar",
        resources,
    });

export default i18n;
