import { createPinia } from "pinia";
import { App } from "vue";

const setupStore = (app: App) => {
  const pinia = createPinia();
  app.use(pinia);
};

export default setupStore;
