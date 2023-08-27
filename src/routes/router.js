import { createRouter, createWebHashHistory } from 'vue-router';

import Login from './Login.vue';
import Register from './Register.vue';
import Profile from './Profile.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
