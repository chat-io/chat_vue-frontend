import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "../pages/auth/UserLogin.vue";
import UserSignup from "../pages/auth/UserSignup.vue";

import App from "../App.vue";
const routes = [
  { path: "/", component: App },
  {
    path: "/login",
    component: UserLogin,
  },
  {
    path: "/signup",
    component: UserSignup,
  },
  {
    path: "/chat",
    component: null,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
