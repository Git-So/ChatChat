import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "2FA",
    component: () => import("../page/login/2FA.vue"),
  },
  {
    path: "Account",
    component: () => import("../page/login/Account.vue"),
  },
  {
    path: "Option",
    component: () => import("../page/login/Option.vue"),
  },
  {
    path: "Passwd",
    component: () => import("../page/login/Passwd.vue"),
  },
  {
    path: "Phone",
    component: () => import("../page/login/Phone.vue"),
  },
  {
    path: "QRCode",
    component: () => import("../page/login/QRCode.vue"),
  },
];

export default routes;
