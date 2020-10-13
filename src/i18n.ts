import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { deTranslation } from "locales/deTranslation";
import { enTranslation } from "locales/enTranslation";
import { initReactI18next } from "react-i18next";
import { Languages } from "types/common/Languages";
import { createBundle } from "utils/createBundle";

export enum Namespaces {
  Search = "search",
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Languages.en,
    ns: Object.values(Namespaces),
    resources: {
      en: createBundle(Namespaces, enTranslation),
      de: createBundle(Namespaces, deTranslation),
    },
    detection: {
      order: ["localStorage"],
      cache: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
