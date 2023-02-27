import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "chat",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
