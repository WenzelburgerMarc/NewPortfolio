import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes/index.js";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {
      path: "/:pathMatch(.*)",
      component: NotFoundPage,
    },
  ],
});

export default router;
