import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: TheMain,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/courses",
    name: "TheCourses",
    component: () => import("../views/TheCourses.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
