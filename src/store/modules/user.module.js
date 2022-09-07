import UserService from "../../services/user.service";

const userData = JSON.parse(localStorage.getItem("userData"));

export const user = {
    namespaced: true,
    state:{
        userData: userData,
    },
    actions: {
        getUser({ commit }) {
            return UserService.getUser().then(
                (data) => {
                    commit("getUserSuccess", data);
                    return Promise.resolve(data);
                },
                (error) => {
                    commit("getUserFailure");
                    return Promise.reject(error);
                }
            );
        },
        updateUser({ commit }) {
            return UserService.updateUser().then(
                (data) => {
                    commit("updateUserSuccess", data);
                    return Promise.resolve(data);
                },
                (error) => {
                    commit("updateUserFailure");
                    return Promise.reject(error);
                }
            );
        },
        deleteUser({ commit }) {
            return UserService.deleteUser().then(
                (data) => {
                    commit("deleteUserSuccess", data);
                    return Promise.resolve(data);
                },
                (error) => {
                    commit("deleteUserFailure");
                    return Promise.reject(error);
                }
            );
        },
    },
    mutations: {
        getUserSuccess(state, data) {
            state.userData = data;
        },
        getUserFailure(state) {
            state.userData = null;
        },
        updateUserSuccess(state, data) {
            state.userData = data;
        },
        updateUserFailure(state) {
            state.userData = null;
        },
        deleteUserSuccess(state, data) {
            state.userData = data;
        },
        deleteUserFailure(state) {
            state.userData = null;
        }
    },
};