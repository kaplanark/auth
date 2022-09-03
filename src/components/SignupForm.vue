<template>
    <n-form ref="formRef" :model="data" :rules="rules" :show-label="false">
        <n-space vertical>
            <n-input-group class="mb-2">
                <n-input v-model:value="data.name" type="text" :placeholder="$t('auth_signup_input_placeholder_name')"
                    class="w-50">
                    <!-- <template #prefix>
                    <n-icon :component="PersonOutline" />
                </template> -->
                </n-input>
                <n-input v-model:value="data.surname" type="text"
                    :placeholder="$t('auth_signup_input_placeholder_surname')" class="w-50">
                </n-input>
            </n-input-group>
            <n-form-item path="username">
                <n-input v-model:value="data.username" type="text"
                    :placeholder="$t('auth_signup_input_placeholder_un')">
                    <template #prefix>
                        <n-icon :component="PersonOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item path="email">
                <n-auto-complete v-model:value="data.email" type="mail" :options="emailOptions"
                    :placeholder="$t('auth_signup_input_placeholder_email')">
                    <template #prefix>
                        <n-icon :component="At" />
                    </template>
                </n-auto-complete>
            </n-form-item>
            <n-form-item path="password">
                <n-input v-model:value="data.password" type="password" show-password-on="mousedown"
                    :placeholder="$t('auth_signup_input_placeholder_pwd')">
                    <template #prefix>
                        <n-icon :component="LockClosedOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item path="password2">
                <n-input v-model:value="data.password2" type="password" show-password-on="mousedown"
                    :placeholder="$t('auth_signup_input_placeholder_pwd_confirm')">
                    <template #prefix>
                        <n-icon :component="LockClosedOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item>
                <n-spin :show="signupSpin" size="small" class="w-100">
                    <n-button type="success" secondary class="w-100" @click="signUp" strong>
                        {{ $t('auth_signup_btn') }}
                    </n-button>
                </n-spin>
            </n-form-item>
        </n-space>
    </n-form>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { LockClosedOutline, PersonOutline, At } from '@vicons/ionicons5'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { genOptions, emailOptions } from '../utils/index'
import { signupFormRules } from '../rules/index.js'
import authService from '../services/authService'
export default defineComponent({
    components: {
        LockClosedOutline,
        PersonOutline,
        At
    },
    setup() {
        const formRef = ref(null);
        const data = ref({ name: "", surname: "", email: "", username: "", password: "", password2: "" });
        const { commit } = useStore();
        const { t } = useI18n();
        const rules = ref(signupFormRules);
        const signupSpin = ref(false);
        return {
            formRef,
            data,
            rules,
            LockClosedOutline,
            PersonOutline,
            At,
            options: genOptions(),
            emailOptions: emailOptions(data),
            signupSpin,
            signUp(e) {
                signupSpin.value = true;
                e.preventDefault();
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        if (data.value.password !== data.value.password2) {
                            commit('setAlert', { show: true, title: t('warning'), type: 'warning', message: t('auth_signup_passwords_not_match') });
                            signupSpin.value = false;
                        } else {
                            authService.signUp(data.value).then(() => {
                                signupSpin.value = false;
                            });
                        }
                    } else {
                        commit("setAlert", { show: true, title: t('warning'), type: "warning", message: t('all_blank') });
                        signupSpin.value = false;
                    }
                });
            }
        }
    },
})
</script>