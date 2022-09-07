import { createRouter, createWebHistory } from "vue-router"
import authRoutes from "./auth.routes"
import genRoutes from "./gen.routes"

const router = createRouter({
    history: createWebHistory(),
    routes: [...genRoutes, ...authRoutes]
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/auth', '/reset-pass'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('userData');
    if (authRequired && !loggedIn) {
        next('/auth');
    } else {
        next();
    }
});

export default router