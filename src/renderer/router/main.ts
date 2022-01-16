import { createRouter, createWebHistory } from "vue-router";
import login from "./login";
import setting from "./setting";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/chat",
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../page/Home.vue"),
    },
    // 登录
    {
      path: "/login",
      name: "Login",
      component: () => import("../page/login/Index.vue"),
      redirect: "/login/Plugin",
      children: login,
    },
    // 设置
    {
      path: "/setting",
      name: "Setting",
      component: () => import("../page/setting/Index.vue"),
      redirect: "/setting/common",
      children: setting,
    },
    // 聊天室
    {
      path: "/chat",
      component: () => import("../page/Chat.vue"),
    },
    // 默认页
    { path: "/:pathMatch(.*)*", redirect: "/home" },
  ],
});
