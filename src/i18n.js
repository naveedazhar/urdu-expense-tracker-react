import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

// https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory
// import outside /src folders are now allowed by default if you create app using create-react-app

import translationEN from './locales/en/translation.json';
import translationUR from './locales/ur/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ur: {
    translation: translationUR
  }
};


i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ur",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;