import { createPinia } from "pinia";
import { App } from "vue";

import { UserStore } from "./modules/user";
import { ControlStore } from "./modules/control";

const setupStore = (app: App) => {
  const pinia = createPinia();
  app.use(pinia);
};

export { UserStore, ControlStore };
export default setupStore;
