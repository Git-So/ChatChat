import { createRouter, createWebHistory } from "vue-router";
import login from "./login";
import setting from "./setting";
import chat from "./chat";

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
      component: () => import("../page/Home.vue"),
    },
    // 登录
    {
      path: "/login",
      name: "Login",
      component: () => import("../page/login/Index.vue"),
      redirect: "/login/Account",
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
      component: () => import("../page/chat/Index.vue"),
      redirect: "/chat/empty",
      children: chat,
    },
    // 默认页
    { path: "/:pathMatch(.*)*", redirect: "/home" },
  ],
});
