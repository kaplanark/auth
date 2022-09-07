import axios from "axios";
const API_URL = "http://localhost:5000/api";

class AuthService {
    async signIn(user) {
        return await axios
            .post(API_URL + "/auth/signin", {
                login: user.login,
                password: user.password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("userData", JSON.stringify(response.data.userData));
                    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                }
                return response.data;
            });
    }

    signOut() {
        localStorage.removeItem("user");
    }

    async signUp(user) {
        return await axios.post(API_URL + "/auth/signup", {
            name: user.name,
            surname: user.surname,
            username: user.username,
            email: user.email,
            password: user.password,
        });
    }

    async resetPass(user) {
        return await axios.post(API_URL + "/auth/reset", {
            email: user.email,
        });
    }
}

export default new AuthService();