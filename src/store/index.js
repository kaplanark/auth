import { createStore } from 'vuex'
import { auth } from './modules/auth.module'
import { user } from './modules/user.module'
const store = createStore({
    state: {
        alert: {
            show: false,
            title: '',
            type: '',
            message: ''
        },
    },
    mutations: {
        setAlert(state, payload) {
            state.alert = payload;
            payload.show && setTimeout(() => {
                state.alert.show = false;
            }, 10000);
        }
    },
    modules: {
        auth,
        user
    }
})
export default store