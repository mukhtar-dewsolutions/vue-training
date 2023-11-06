import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/Login.vue";
import UserDashboard from "../components/UserPage.vue";
import HomePage from "../components/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/user-dashboard",
    name: "UserDashboard",
    component: UserDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
