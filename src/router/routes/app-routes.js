const appRoutes = [
  {
    path: "/",
    alias: "/portfolio", // weiterer (2.) name für den pfad
    component: () => import("@/pages/PortfolioPage.vue"),
  },
  {
    path: "/imprint",
    alias: "/impressum", // weiterer (2.) name für den pfad
    component: () => import("@/pages/ImprintPage.vue"),
  },
];

export default appRoutes;
