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
    // 设置
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
    // 聊天室
    {
      path: "/chat",
      component: () => import("./page/chat/Index.vue"),
      children: [
        {
          path: "contact/:type_value",
          component: () => import("./page/chat/Contact.vue"),
        },
        {
          path: "group/:type_value",
          component: () => import("./page/chat/Group.vue"),
        },
        {
          path: "channel/:type_value",
          component: () => import("./page/chat/Channel.vue"),
        },
        {
          path: "other/:type_value",
          component: () => import("./page/chat/Other.vue"),
        },
        {
          path: "empty",
          component: () => import("./page/chat/Empty.vue"),
        },
      ],
    },
    // 默认页
    { path: "/:pathMatch(.*)*", redirect: "/home" },
  ],
});
