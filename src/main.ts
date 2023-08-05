import { createApp } from "vue";
import {} from "pinia";

import "@/styles/index.less";
import App from "./App.vue";

import setupDirectives from "@/directives";
import setupRouter from "@/router";
import setupStore from "@/stores";

const app = createApp(App);

setupStore(app);
setupDirectives(app);
setupRouter(app);

app.mount("#app");
