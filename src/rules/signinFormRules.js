import i18n from "../locales/index";
const {t} = i18n.global;
const rules = {
    login: {
        required: true,
        message: () => {
            return t('invalid', { info: t('email_or_username') });
        },
        trigger: "blur"
    },
    password: {
        required: true,
        message: () => {
            return t('invalid', { info: t('password') });
        },
        trigger: "blur"
    },
};
export default rules;