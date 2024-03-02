import i18n from "i18next";
import transEn from "locales/en/translation.json";
import transKo from "locales/ko/translation.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: transEn,
  },
  ko: {
    translation: transKo,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
