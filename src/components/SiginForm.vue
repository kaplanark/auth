<template>
    <n-form ref="formRef" :model="data" :rules="rules" :show-label="false">
        <n-space vertical>
            <n-form-item path="email">
                <n-input v-model:value="data.email" type="email" :placeholder="$t('auth_signin_input_placeholder')">
                    <template #prefix>
                        <n-icon :component="PersonOutline" />
                    </template>
                </n-input>
            </n-form-item>
            <n-button text class="float-right fs-xs" @click="resetPassword">{{ $t('auth_signin_forgot_pwd_btn') }}
            </n-button>
            <n-form-item path="password">
                <n-input v-model:value="data.password" type="password" show-password-on="mousedown"
                    :placeholder="$t('auth_signin_input_placeholder_pwd')" :maxlength="16">
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
import { defineComponent, ref, toRaw } from 'vue'
import { LockClosedOutline, PersonOutline } from '@vicons/ionicons5'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { signinFormRules } from '../rules/index'
import authService from '../services/authService'
import { set } from 'lodash'
export default defineComponent({
    components: {
        LockClosedOutline,
        PersonOutline
    },
    setup() {
        const formRef = ref(null);
        const { commit,state } = useStore();
        const { t } = useI18n();
        const data = ref({ email: "", password: "" });
        const rules = ref(signinFormRules);
        const signinSpin = ref(false);
        return {
            formRef,
            data,
            rules,
            LockClosedOutline,
            PersonOutline,
            signinSpin,
            signIn(e) {
                signinSpin.value = true;
                e.preventDefault();
                formRef.value?.validate((errors) => {
                    if (!errors) {
                        authService.signIn(toRaw(data.value)).then(() => {
                            commit('setUser', data.value);
                        }).catch(() => {
                            commit('setAlert', { show: true, type: 'error', title: t('error'), message: 'Giriş başarısız' });
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
    methods: {
        resetPassword() {
            this.$router.push('/reset-password')
        }
    },
})
</script>