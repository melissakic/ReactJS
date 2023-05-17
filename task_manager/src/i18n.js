import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const transEng = {
  firstD: "Plan your tasks",
  secondD: "Collaborate with colleagues",
  thirdD: "Log time and be efficient",
  login: "Welcome back!",
};
const transBs = {
  firstD: "Planirajte zadatke",
  secondD: "Surađujte sa kolegama",
  thirdD: "Bilježite vrijeme i budite efikasni",
  login: "Dobrodošli!",
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: { translation: transEng },
      bs: { translation: transBs },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
