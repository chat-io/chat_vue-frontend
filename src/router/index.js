import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "../pages/auth/UserAuth.vue";
import ChatMain from "../pages/chat/ChatMain.vue";

// import App from "../App.vue";
const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/auth",
    component: UserAuth,
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
