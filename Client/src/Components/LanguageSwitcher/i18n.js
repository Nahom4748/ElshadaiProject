import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en/translation.json"; // English translations
import am from "../../locales/am/translation.json"; // Amharic translations
import ti from "../../locales/tig/translation.json"; // Tigrinya translations

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
    ti: { translation: ti },
  },
  lng: "en", // Default language is English
  fallbackLng: "en", // Fallback language if the selected one is unavailable
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
