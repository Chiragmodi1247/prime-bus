import { createWebHistory, createRouter } from "vue-router";
import AddRoute from "/src/components/AddRoute.vue";
import ViewRoutes from "/src/components/ViewRoutes.vue";
import ShowMap from "/src/components/ShowMap.vue";

const routes = [
  {
    path: '/:routeId?',
    name: 'AddRoute',
    component: AddRoute,
  },
  {
    path: "/viewRoutes",
    name: "ViewRoutes",
    component: ViewRoutes,
  },
  {
    path: "/showMap/:routeId?",
    name: "ShowMap",
    component: ShowMap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;