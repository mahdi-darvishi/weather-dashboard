import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/translation.json";
import fa from "./locales/fa/translation.json";

const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

const USER_LANGUAGE_KEY = "language";

i18n.use(initReactI18next).init({
  resources,

  lng: (() => {
    try {
      return localStorage.getItem(USER_LANGUAGE_KEY) || "en";
    } catch {
      return "en";
    }
  })(),

  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // React
  },

  supportedLngs: ["en", "fa"],
});

export default i18n;
