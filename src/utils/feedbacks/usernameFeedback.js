export default function usernameFeedback(value) {
    if (value.length < 3) {
        return 'Username must be at least 3 characters long';
    }
    if (value.length > 10) {
        return 'Username must be at most 10 characters long';
    }
    return 'Username is valid';
}