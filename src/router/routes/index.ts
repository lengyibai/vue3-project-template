import type { RouteRecordRaw } from "vue-router";

import Main from "@/layout/Main.vue";
import Page from "@/layout/Page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/",
  },
  {
    path: "/tabbar",
    component: Main,
    children: [],
  },
  {
    path: "/page",
    component: Page,
    children: [],
  },
];

export { routes };
