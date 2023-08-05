import { createPinia } from "pinia";
import { App } from "vue";

import counter from "./modules/counter";

const setupStore = (app: App) => {
  const pinia = createPinia();
  app.use(pinia);
};
const Store = {
  counter,
};

export { Store };
export default setupStore;
