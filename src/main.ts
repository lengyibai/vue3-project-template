import { createApp } from "vue";

import App from "./App.vue";

import { setupRouter } from "@/router";
import { setupLanguage } from "@/language";
import { setupStore } from "@/stores";

import "@/styles/index.less";

const app = createApp(App);
setupStore(app);
setupLanguage(app);
setupRouter(app);
app.mount("#app");

if (import.meta.env.PROD) {
  //eslint-disable-next-line no-var
  var _hmt: any = _hmt || [];
  (function () {
    const hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?2c84cd61316a5ce978ca513745ec7eaa";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode!.insertBefore(hm, s);
  })();
}
