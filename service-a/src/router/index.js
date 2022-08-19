import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import B1View from '../views/B1View.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/service-b1',
    name: 'serviceB1',
    component: B1View,
    // component: () => import('../views/B1View.vue'),
  },
  {
    path: '/service-b2',
    name: 'serviceB2',
    component: () => import('../views/B2View.vue'),
  },
  {
    path: '/service-b3',
    name: 'serviceB3',
    component: () => import('../views/B3View.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
