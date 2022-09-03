<template>
    <n-layout content-style="height:100vh" class="login-content">
        <n-layout-content class="h-100">
            <n-grid class="h-100 d-flex align-center" cols="24" item-responsive responsive="screen">
                <n-grid-item span="22 s:12 m:10 l:8 xl:8" offset="1 s:6 m:7 l:8 xl:8">
                    <n-card content-style="padding: 0;" class="shadow-sm">
                        <n-alert :bordered="false" :title="alert.title" :type="alert.type" v-show="alert.show">
                            {{ alert.message }}
                        </n-alert>
                        <div>
                            <n-tabs type="line" size="large" :tabs-padding="20" default-value="signin" animated
                                pane-style="padding: 20px;">
                                <n-tab-pane name="signin" :tab="$t('auth_signin_title')">
                                    <SiginForm></SiginForm>
                                </n-tab-pane>
                                <n-tab-pane name="signup" :tab="$t('auth_signup_title')">
                                    <SignupForm></SignupForm>
                                </n-tab-pane>
                            </n-tabs>
                        </div>
                        <template #action>
                            <n-space>
                                <n-button text size="small">
                                    <template #icon>
                                        <n-icon size="16">
                                            <logo-github />
                                        </n-icon>
                                    </template>
                                    <span class="fs-xs">/repository</span>
                                </n-button>
                                <n-button text size="small">
                                    <template #icon>
                                        <n-icon size="16">
                                            <logo-twitter />
                                        </n-icon>
                                    </template>
                                    <span class="fs-xs">/username</span>
                                </n-button>
                            </n-space>
                        </template>
                    </n-card>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>
  
  <script>
  import { defineComponent } from 'vue'
  import SiginForm from '../components/SiginForm.vue'
  import SignupForm from '../components/SignupForm.vue'
  import { LogoGithub, LogoTwitter } from '@vicons/ionicons5'

  export default defineComponent({
      components: {
          SiginForm,
          SignupForm,
          LogoGithub,
          LogoTwitter
      },
      setup() {
  
          return {
  
          }
      },
      computed: {
          alert() {
              return this.$store.state.alert
          }
      },
      
  })
  </script>