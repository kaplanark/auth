import { createStore } from 'vuex'

// activeUser = () => {
//     const accessToken = localStorage.getItem("accessToken");
//     if (accessToken) {
//         return { id: "", name: "", surname: "", email: "", accessToken: accessToken, isAuth: true };
//     }
//     return { id: "", name: "", surname: "", email: "", accessToken: "", isAuth: false };
// }
const store = createStore({
    state: {
        // user: activeUser(),
        alert: {
            show: false,
            title: '',
            type: '',
            message: ''
        },
        loginSpin:false,
    },
    mutations: {
        setAlert(state, payload) {
            state.alert = payload;
            payload.show && setTimeout(() => {
                state.alert.show = false;
            }, 5000);
        },
        setUser(state, payload) {
            // state.user.id = payload.id;
            // state.user.name = payload.name;
            // state.user.surname = payload.surname;
            // state.user.email = payload.email;
        },
        signOut(state) {
            localStorage.removeItem("accessToken");
            state.user.isAuth = false;
        }
    },
    actions: {

    }
})
export default store