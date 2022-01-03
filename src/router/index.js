import { createRouter, createWebHistory } from "vue-router";
import UserLogin from "../pages/auth/UserLogin.vue";
import UserSignup from "../pages/auth/UserSignup.vue";
import ChatMain from "../pages/chat/ChatMain.vue";

// import App from "../App.vue";
const routes = [
  { path: "/", redirect: "/login" },
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
    component: ChatMain,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
