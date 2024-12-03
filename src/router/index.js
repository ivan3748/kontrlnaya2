import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import Users from '../views/UsersPage.vue';
import Login from '../views/LoginPage.vue';
import Profile from '../views/ProfilePage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/users', name: 'Users', component: Users },
  { path: '/login', name: 'Login', component: Login },
  { 
    path: '/profile', 
    name: 'Profile', 
    component: Profile, 
    meta: { requiresAuth: true } 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
