import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "empty",
  },
  {
    path: "contact/:type_value",
    component: () => import("../page/chat/Contact.vue"),
  },
  {
    path: "group/:type_value",
    component: () => import("../page/chat/Group.vue"),
  },
  {
    path: "channel/:type_value",
    component: () => import("../page/chat/Channel.vue"),
  },
  {
    path: "other/:type_value",
    component: () => import("../page/chat/Other.vue"),
  },
  {
    path: "empty",
    component: () => import("../page/chat/Empty.vue"),
  },
];

export default routes;
