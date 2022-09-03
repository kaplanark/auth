export default function surnameFeedback(value) {
    switch (value) {
        case value.length < 2:
            return "Surname cannot be shorter than 2 characters";
        case value.length > 20:
            return "Surname cannot be longer than 20 characters";
        default:
            return "Surname is valid";
    }
}