import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "common",
  },
  {
    path: "common",
    component: () => import("../page/setting/Common.vue"),
  },
  {
    path: "plugin",
    component: () => import("../page/setting/Plugin.vue"),
  },
  {
    path: "developer",
    component: () => import("../page/setting/Developer.vue"),
  },
  {
    path: "about",
    component: () => import("../page/setting/About.vue"),
  },
];

export default routes;
