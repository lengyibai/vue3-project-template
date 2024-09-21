import type { RouteRecordRaw } from "vue-router";

const mainRoutes: RouteRecordRaw[] = [
  {
    path: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/Home/index.vue"),
  },
];

export { mainRoutes };
