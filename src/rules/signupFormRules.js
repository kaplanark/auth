import i18n from "../locales/index";
const {t} = i18n.global;
const rules = {
    username: {
        required: true,
        message: () => {
            return t('invalid', { info: t('username') });
        },
        trigger: "blur"
    },
    email: {
        required: true,
        message: () => {
            return t('invalid', { info: t('email') });
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
    password2: {
        required: true,
        message: () => {
            return t('invalid', { info: t('password') });
        },
        trigger: "blur"
    },
};

export default rules;