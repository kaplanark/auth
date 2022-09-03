import { computed } from 'vue'
export default function useEmailOptions(data) {
    return computed(() => {
        return ["@gmail.com", "@outlook.com", "@yendex.com"].map((suffix) => {
            const prefix = data.value.email.split("@")[0];
            return {
                label: prefix + suffix,
                value: prefix + suffix
            };
        });
    });
}


