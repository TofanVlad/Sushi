import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "chat",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/Products/:name",
    name: "products",
    component: () => import("../views/Products.vue"),
    props: true,
  },
  {
    path: "/Products/:category/:id",
    name: "product",
    component: () => import("../views/Product.vue"),
    props: true,
  },
  {
    path: "/Checkout",
    name: "checkout",
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/Check/:id",
    name: "check",
    component: () => import("../views/Check.vue"),
    props: true,
  },
  {
    path: "/Profile/:id",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    props: true,
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
