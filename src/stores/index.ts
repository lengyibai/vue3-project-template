import { createPinia } from "pinia";
import { App } from "vue";

export { UserStore } from "./modules/user";
export { ControlStore } from "./modules/control";

const setupStore = (app: App) => {
  const pinia = createPinia();
  app.use(pinia);
};

export default setupStore;
