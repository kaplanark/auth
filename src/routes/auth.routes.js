import Auth from "../views/auth/Auth.vue"
import ResetPass from "../views/auth/ResetPass.vue"

export default [
    { path: '', name: 'index', redirect: '/authentication' },
    { path: '/auth', name: 'auth', component: Auth },
    { path: '/reset-pass', name: 'reset-pass', component: ResetPass },
]