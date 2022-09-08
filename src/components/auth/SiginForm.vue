<template>
    <n-form ref="formRef" :model="user" :rules="rules" :show-label="false">
        <n-space vertical>
            <n-form-item path="login">
                <n-input v-model:value="user.login" type="text" :placeholder="$t('auth_signin_input_placeholder')"
                    clearable>
                    <template #prefix>
                        <n-icon :component="PersonOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-button text class="float-right fs-xs" @click="resetPassword">{{ $t('auth_signin_forgot_pwd_btn') }}
            </n-button>
            <n-form-item path="password">
                <n-input v-model:value="user.password" type="password" show-password-on="mousedown"
                    :placeholder="$t('auth_signin_input_placeholder_pwd')" :maxlength="20" clearable>
                    <template #prefix>
                        <n-icon :component="LockClosedOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item>
                <n-spin :show="signinSpin" size="small" class="w-100">
                    <n-button type="success" secondary class="w-100" @click="signIn" strong>
                        {{ $t('auth_signin_btn') }}
                    </n-button>
                </n-spin>
            </n-form-item>
        </n-space>
    </n-form>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { LockClosedOutline, PersonOutline } from '@vicons/ionicons5'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { signinFormRules } from '../../rules/index'
import { useRouter } from 'vue-router'
export default defineComponent({
    components: {
        LockClosedOutline,
        PersonOutline
    },
    setup() {
        const formRef = ref(null);
        const { commit, dispatch } = useStore();
        const { t } = useI18n();
        const user = ref({ login: "", password: "" });
        const rules = ref(signinFormRules);
        const signinSpin = ref(false);
        const router = useRouter()
        const resetPassword = () => {
            router.push('/reset-pass')
        }
        return {
            formRef,
            user,
            rules,
            LockClosedOutline,
            PersonOutline,
            signinSpin,
            resetPassword,
            signIn(e) {
                signinSpin.value = true;
                e.preventDefault();
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        dispatch('auth/signIn', user.value)
                            .then(data => {
                                if (data.message) {
                                    commit('setAlert', { show: true, title: t('warning'), type: 'warning', message: data.message });
                                }
                                router.push('/profile')
                            })
                            .catch((error) => {
                                commit('setAlert', { show: true, title: t('error'), type: 'error', message: error });
                            }).finally(() => {
                                signinSpin.value = false;
                            });
                    } else {
                        commit("setAlert", { show: true, title: t('warning'), type: "warning", message: t('all_blank') });
                        signinSpin.value = false;
                    }
                });
            },
        }
    },
})
</script>