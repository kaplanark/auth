import i18n from "../locales/index";
const { t } = i18n.global;

let  password = "";
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
        validator(rule, value) {
            password = value;
            if (!value) {
                return new Error(t('invalid', { info: t('password') }));
            } else if (value.length < 8) {
                return new Error(t('password_be_short'));
            } else if (value.length > 20) {
                return new Error(t('password_be_long'));
            }
            return true;
        },
        trigger: "blur"
    },
    confirmPassword: {
        required: true,
        validator(rule, value) {
            if (!value) {
                return new Error(t('confirm_password'));
            } else if (value !== password) {
                return new Error(t('password_not_match'));
            }
            return true;
        },
        trigger: "blur"
    },
};

export default rules;