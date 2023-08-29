import { createI18n } from "vue-i18n";
import type { App } from "vue";

import zh from "./modules/zh";
import en from "./modules/en";

type LangText = Record<string, Record<string, string>>;

const messages: LangText = {
  zh,
  en,
};
const local_lang = localStorage.getItem("language");

const i18n = createI18n({
  locale: local_lang || "zh",
  /** 如果要支持 compositionAPI，此项必须设置为 false */
  legacy: false,
  /** 全局注册$t方法 */
  globalInjection: true,
  messages,
});
const $t = i18n.global.t;
const lang = i18n.global.locale;

/** @description 挂载 */
const setupLanguage = (app: App) => {
  app.use(i18n);
};

/** @description 设置语言 */
const setLanguage = (index: number) => {
  const langs = ["zh", "en"];
  const lang = langs[index];

  i18n.global.setLocaleMessage(lang, messages[lang]);
  i18n.global.locale.value = lang;
  localStorage.setItem("language", lang);
};

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "q") {
    setLanguage(lang.value === "zh" ? 1 : 0);
    // location.reload();
  }
});

export { $t, setLanguage, lang };

export default setupLanguage;
