import Profile from "../views/Profile.vue"
import NotFound from "../views/NotFound.vue"

export default [
    { path: '', name: 'index', redirect: '/auth' },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]