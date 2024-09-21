import { createPinia } from "pinia";
import type { App } from "vue";

export * from "./modules/user";

/** @description 挂载 */
const setupStore = (app: App) => {
  const pinia = createPinia();
  app.use(pinia);
};

export { setupStore };
