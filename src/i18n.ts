import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { getLang } from "./utils/helper";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: getLang(),
    fallbackLng: "en",
    preload: ["en", "ru", "uz"],
    backend: {
      loadPath: "locales/{{lng}}/translation.json"
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    }
  })

export default i18n;