import Polyglot from "node-polyglot";
import translations from "../languages/i18n.json";

export type Locale = "zh" | "en";

let polyglot: Polyglot | any;
const defLocale = "en";

const supportLocale = ["zh", "en"];

const initTranslation = (language: string = defLocale) => {
  const locale = supportLocale.find((e) => e === language) ?? defLocale;

  polyglot = new Polyglot({
    locale: locale,
    phrases: translations[locale as Locale],
    interpolation: { prefix: "{{", suffix: "}}" },
  });
};

const translate = (term: string) => {
  if (!polyglot) {
    return term;
  }

  return polyglot.t(term);
};

function getBrowserLanguage() {
  const [language] = navigator.language.split("-");

  return supportLocale.find((e) => e === language) ?? defLocale;
}

const POLYGLOT_STORAGE_NAME = "polyglot-language";

function getLocalStorageLanguage() {
  return localStorage.getItem(POLYGLOT_STORAGE_NAME) ?? "";
}

function getLanguage() {
  const language = getLocalStorageLanguage();

  if (!language) {
    return getBrowserLanguage();
  }
  return supportLocale.find((e) => e === language) ?? defLocale;
}

export {
  translate,
  initTranslation,
  polyglot,
  getLanguage,
  POLYGLOT_STORAGE_NAME,
};
