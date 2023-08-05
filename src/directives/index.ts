import type { App } from "vue";

import focus from "./modules/focus";

const directivesList: Record<string, any> = {
  focus,
};

const directives = {
  install: function (app: App<Element>) {
    Object.keys(directivesList).forEach((key) => {
      app.directive(key, directivesList[key]);
    });
  },
};

const setupDirectives = (app: App) => {
  app.use(directives);
};

export default setupDirectives;
