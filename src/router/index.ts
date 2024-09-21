import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";

import { routes } from "./routes";

import { $loading } from "@/utils";

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach(async (to, from, next) => {
  /* 避免地址栏增加参数 */
  if (to.path !== from.path) {
    $loading.show(`正在加载${to.meta.title}页`);
  }

  next();
});

router.afterEach((to) => {
  document.title = to.meta.title as string;
});

const setupRouter = (app: App) => {
  app.use(router);
};

export { setupRouter, router };
