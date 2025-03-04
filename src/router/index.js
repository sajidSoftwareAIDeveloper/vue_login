import { createRouter, createWebHistory } from 'vue-router';

import show from '@/views/show.vue';
//import finalPage from '@/views/finalPage.vue';
import first from '@/pages/first.vue';
import secound from '@/pages/secound.vue';
import final from '@/pages/final.vue';
import profile from '@/pages/profile.vue';
import notFound from '@/pages/NotFound.vue';

const routes = [
  { path: '/', name: 'show', component: show },
  // { path: '/finalPage', name: 'finalPage', component: finalPage },
  { path: '/first', name: 'first', component: first },
  { path: '/secound', name: 'secound', component: secound },
  { path: '/final', name: 'final', component: final },
  { path: '/profile', name: 'profile', component: profile },
  { path: '/:catchAll(.*)',  name: 'notFound', component: notFound,}
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
