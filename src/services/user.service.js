import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://localhost:500/api/';
class UserService {
    async getUser() {
        return await axios
            .get(API_URL + 'user', { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
    }
    async updateUser() {
        return await axios
            .post(API_URL + 'user', { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
    }
    async deleteUser() {
        return await axios
            .delete(API_URL + 'user', { headers: authHeader() })
            .then((response) => {
                return response.data;
            })
    }

}
export default new UserService();