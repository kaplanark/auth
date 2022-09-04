import { computed } from 'vue'

const mailList = ["@gmail.com", "@outlook.com", "@yendex.com","@yahoo.com"]
export default function useEmailOptions(data) {
    return computed(() => {
        return mailList.map((suffix) => {
            const prefix = data.value.email.split("@")[0];
            return {
                label: prefix + suffix,
                value: prefix + suffix
            };
        });
    });
}


