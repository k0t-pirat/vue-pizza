import { middlewarePipeline } from "@/middlewares/middlewarePipeline";
import { routes } from "@/router/routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

middlewarePipeline(router);

export default router;
