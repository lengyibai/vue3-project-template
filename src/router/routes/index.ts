import type { RouteRecordRaw } from "vue-router";

import { mainRoutes } from "./modules/main";
import { pageRoutes } from "./modules/page";

import Main from "@/layout/Main.vue";
import Page from "@/layout/Page.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/page/login",
  },
  {
    path: "/tabbar",
    component: Main,
    children: mainRoutes,
  },
  {
    path: "/page",
    component: Page,
    children: pageRoutes,
  },
];

export { routes };
