import type { RouteRecordRaw } from "vue-router";

const pageRoutes: RouteRecordRaw[] = [
  {
    path: "login",
    meta: {
      title: "登录",
    },
    component: () => import("@/views/Base/Login/index.vue"),
  },
];

export { pageRoutes };
