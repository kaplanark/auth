export default function passwordFeedback(value) {
    switch (value) {
        case value.length < 8:
            return "Password cannot be shorter than 6 characters";
        case value.length > 20:
            return "Password cannot be longer than 20 characters";
        default:
            return "Password is valid";
    }
}