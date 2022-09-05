import AuthService from "../../services/auth.service";

const userData = JSON.parse(localStorage.getItem("userData"));
const accessToken = JSON.parse(localStorage.getItem("accessToken"));
const initialState = userData
    ? { status: { loggedIn: true }, userData, accessToken }
    : { status: { loggedIn: false }, userData: null, accessToken: null };

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        signIn({ commit }, user) {
            return AuthService.signIn(user).then(
                (user) => {
                    commit("signInSuccess", user);
                    return Promise.resolve(user);
                },
                (error) => {
                    commit("signInFailure");
                    return Promise.reject(error);
                }
            );
        },
        signOut({ commit }) {
            AuthService.signOut();
            commit("signOut");
        },
        signUp({ commit }, user) {
            return AuthService.signUp(user).then(
                (response) => {
                    commit("signUpSuccess");
                    return Promise.resolve(response.data);
                },
                (error) => {
                    commit("signUpFailure");
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        signInSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        signInFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        signOut(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        signUpSuccess(state) {
            state.status.loggedIn = false;
        },
        signUpFailure(state) {
            state.status.loggedIn = false;
        },
    },
};