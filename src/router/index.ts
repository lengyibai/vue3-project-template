//@ts-nocheck
import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";

import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

const setupRouter = (app: App) => {
  app.use(router);
};

export { router };
export default setupRouter;
