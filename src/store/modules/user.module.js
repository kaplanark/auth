import UserService from "../../services/user.service";

const userData = JSON.parse(localStorage.getItem("userData"));

export const user = {
    namespaced: true,
    state:{
        userData: userData,
    },
    actions: {
        getPublicContent({ commit }) {
            return UserService.getPublicContent();
        },
        getUserBoard({ commit }) {
            return UserService.getUserBoard();
        },
        getModeratorBoard({ commit }) {
            return UserService.getModeratorBoard();
        },
        getAdminBoard({ commit }) {
            return UserService.getAdminBoard();
        },
    },
    mutations: {
        
    },
};