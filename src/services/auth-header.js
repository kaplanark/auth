export default function authHeader() {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (accessToken && userData) {
        return { 'x-access-token': accessToken};
    } else {
        return {};
    }
}