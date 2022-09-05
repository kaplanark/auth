<template>
    <n-form ref="formRef" :model="user" :rules="rules" :show-label="false">
        <n-space vertical>
            <n-input-group class="mb-2">
                <n-input v-model:value="user.name" type="text" :placeholder="$t('auth_signup_input_placeholder_name')"
                    class="w-50" clearable>
                </n-input>
                <n-input v-model:value="user.surname" type="text"
                    :placeholder="$t('auth_signup_input_placeholder_surname')" class="w-50" clearable>
                </n-input>
            </n-input-group>
            <n-form-item path="username">
                <n-input v-model:value="user.username" type="text" :placeholder="$t('auth_signup_input_placeholder_un')"
                    clearable>
                    <template #prefix>
                        <n-icon :component="PersonOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item path="email">
                <n-auto-complete v-model:value="user.email" type="mail" :options="emailOptions"
                    :placeholder="$t('auth_signup_input_placeholder_email')" clearable>
                    <template #prefix>
                        <n-icon :component="At" />
                    </template>
                </n-auto-complete>
            </n-form-item>
            <n-form-item path="password">
                <n-input v-model:value="user.password" type="password" show-password-on="mousedown"
                    :placeholder="$t('auth_signup_input_placeholder_pwd')" clearable>
                    <template #prefix>
                        <n-icon :component="LockClosedOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item path="confirmPassword">
                <n-input v-model:value="user.confirmPassword" type="password" show-password-on="mousedown"
                    :disabled="!user.password"
                    :placeholder="$t('auth_signup_input_placeholder_pwd_confirm')" clearable>
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
import { defineComponent, ref} from 'vue'
import { LockClosedOutline, PersonOutline, At } from '@vicons/ionicons5'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { emailOptions } from '../utils/index'
import { signupFormRules } from '../rules/index.js'

export default defineComponent({
    components: {
        LockClosedOutline,
        PersonOutline,
        At
    },
    setup() {
        const formRef = ref(null);
        const user = ref({ name: "", surname: "", email: "", username: "", password: "", confirmPassword: "" });
        const { commit,dispatch } = useStore();
        const { t } = useI18n();
        const rules = ref(signupFormRules);
        const signupSpin = ref(false);
        
        return {
            formRef,
            user,
            rules,
            LockClosedOutline,
            PersonOutline,
            At,
            emailOptions: emailOptions(user),
            signupSpin,
            signUp(e) {
                signupSpin.value = true;
                e.preventDefault();
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        dispatch('auth/signUp', user.value)
                            .then(data => {
                                commit("setAlert", { show: true, title: t('success'), type: "success", message: data.message });
                            })
                            .catch((error) => {
                                //data mesajı düzenlenecek
                                commit("setAlert", { show: true, title: t('error'), type: "error", message: error });
                            })
                            .finally(() => {
                                signupSpin.value = false;
                            });
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