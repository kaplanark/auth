export default function nameFeedback(value) {
    switch (value) {
        case value.length < 2:
            return "Name cannot be shorter than 2 characters";
        case value.length > 20:
            return "Name cannot be longer than 20 characters";
        default:
            return "Name is valid";
    }
}
