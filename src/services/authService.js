import i18n from "../locales/index";
const { t } = i18n.global;
import axios from "axios";
import store from "../store/index";
const API_URL = "http://localhost:3000/api";
const authService = {
    signIn: async (data) => {
        await axios.post(API_URL + '/auth/signin', JSON.stringify(data))
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                }
                if (response.data.userData) {
                    store.commit("setUser", response.data.userData);
                }
                if (response.data.message) {
                    store.commit("setAlert", {
                        show: true,
                        title: t('error'),
                        type: "error",
                        message: response.data.message
                    });
                }
                return response.data;
            }).catch((error) => {
                store.commit("setAlert", { show: true, title: t('error'), type: "error", message: error });
                store.state.loginSpin = true;
            });
    },
    signUp: async (data) => {
        await axios.post(API_URL + '/auth/signup', JSON.stringify(data))
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                }
                if (response.data.message) {
                    store.commit("setAlert", {
                        show: true,
                        title: t('success'),
                        type: "success",
                        message: response.data.message
                    });
                }
            }).catch((error) => {
                store.commit("setAlert", { show: true, title: t('error'), type: "error", message: error });
            });
    },

    signOut: async () => {
        const response = await axios.post("/api/auth/logout");
        return response.data;
    },
}

export default authService;