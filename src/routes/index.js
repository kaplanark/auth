import { createRouter, createWebHistory } from "vue-router"

import Authentication from "../views/Authentication.vue"
import ResetPassword from "../views/ResetPassword.vue"
import Profile from "../views/Profile.vue"

const routes = [
    { path: '', name: 'index', redirect: '/authentication'},
    { path: '/authentication', name: 'authentication', component: Authentication},
    { path: '/reset-password', name: 'reset-password', component: ResetPassword},
    { path: '/profile', name: 'profile', component: Profile},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/authentication', '/reset-password'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('userData');
    if (authRequired && !loggedIn && to.meta.requiresAuth) {
        next('/authentication');
    } else {
        next();
    }
});

export default router