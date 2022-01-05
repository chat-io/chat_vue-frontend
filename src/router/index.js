import { createRouter, createWebHistory } from "vue-router";
import UserAuth from "../pages/auth/UserAuth.vue";
import ChatMain from "../pages/chat/ChatMain.vue";
import NotFound from "../pages/NotFound.vue";

import store from "../store/index";

const routes = [
  { path: "/", redirect: "/auth" },
  {
    path: "/auth",
    component: UserAuth,
    meta: { requiresUnauth: true },
  },
  {
    path: "/chat",
    component: ChatMain,
    meta: { requiresAuth: true },
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/chat");
  } else {
    next();
  }
});

export default router;
