import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";

import routes from "./routes";

import { $loading } from "@/utils";

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    document.querySelector("#main")?.scrollTo({ top: 0 });
  },
});

router.beforeEach(async (to, from, next) => {
  $loading.showView(`加载${to.meta.title}页面`);
  next();
});

router.afterEach(() => {
  $loading.closeView();
});

const setupRouter = (app: App) => {
  app.use(router);
};

export { router };
export default setupRouter;
