import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("./page/Home.vue"),
    },
    {
      path: "/setting",
      name: "Setting",
      component: () => import("./page/setting/Index.vue"),
      children: [
        {
          path: "common",
          component: () => import("./page/setting/Common.vue"),
        },
        {
          path: "plugin",
          component: () => import("./page/setting/Plugin.vue"),
        },
        {
          path: "developer",
          component: () => import("./page/setting/Developer.vue"),
        },
        {
          path: "about",
          component: () => import("./page/setting/About.vue"),
        },
      ],
    },
    // 默认页
    { path: "/:pathMatch(.*)*", redirect: "/home" },
  ],
});
