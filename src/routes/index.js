import { createRouter, createWebHistory } from "vue-router"
import Authentication from "../views/Authentication.vue"
import ResetPassword from "../views/ResetPassword.vue"
const routes = [
    { path: '', name:'index', redirect: '/authentication', meta: { requiresAuth: true }},
    { path: '/authentication', name:'authentication', component: Authentication ,meta: { requiresAuth: true }},
    { path: '/reset-password', name:'reset-password', component: ResetPassword ,meta: { requiresAuth: true }},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router