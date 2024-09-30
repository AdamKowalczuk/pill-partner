import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import en from "@/locales/en/translation.json";
import pl from "@/locales/pl/translation.json";

const resources = {
  en: { translation: en },
  pl: { translation: pl },
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    const locale = RNLocalize.getLocales()[0].languageCode;
    callback(locale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    compatibilityJSON: "v3",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
