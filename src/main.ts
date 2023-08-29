import { createApp } from "vue";

import "@/styles/index.less";
import App from "./App.vue";

import { $flexible } from "@/utils";
import setupLanguage from "@/language";
import setupDirectives from "@/directives";
import setupRouter from "@/router";
import setupStore from "@/stores";

const app = createApp(App);

setupStore(app);
setupDirectives(app);
setupRouter(app);
setupLanguage(app);

app.mount("#app");

$flexible.init.trigger([4000, 1920], () => {
  document.documentElement.style.fontSize = "16px";
});
$flexible.init.trigger([1920, 320], (v: number) => {
  $flexible.setFontsize([16, 12], v);
});
