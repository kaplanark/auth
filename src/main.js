import { createApp } from 'vue'
import router from './routes/index.js'
import store from './store/index.js'
import App from './App.vue'
import naive from 'naive-ui'
import i18n from './locales/index.js'
import './main.css'

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        next()
    }
})

const app = createApp(App);
app.use(store)
app.use(router);
app.use(naive)
app.use(i18n)
app.mount('#app')
