import { createStore } from 'vuex'
import { auth } from './modules/auth.module'
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
            }, 5000);
        }
    },
    actions: {

    },
    modules: {
        auth
    }
})
export default store