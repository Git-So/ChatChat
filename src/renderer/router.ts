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
      component: () => import("./view/Home.vue"),
    },
    // 默认页
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
