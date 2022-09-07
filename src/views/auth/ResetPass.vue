<template>
    <n-layout content-style="height:100vh" class="login-content">
        <n-layout-content class="h-100">
            <n-grid class="h-100 d-flex align-center" cols="24" item-responsive responsive="screen">
                <n-grid-item span="22 s:12 m:10 l:8 xl:8" offset="1 s:6 m:7 l:8 xl:8">
                    <n-card :title="$t('rp_title')" class="shadow-sm">
                        <template #cover>
                            <n-alert :bordered="false" :title="alert.title" :type="alert.type" v-show="alert.show">
                                {{ alert.message }}
                            </n-alert>
                        </template>
                        <p class="mb-2">
                            {{ $t("rp_text") }}
                        </p>
                        <n-auto-complete v-model:value="data.email" type="mail" :options="emailOptions"
                            :placeholder="$t('rp_input_placeholder')" clearable>
                            <template #prefix>
                                <n-icon :component="At" />
                            </template>
                        </n-auto-complete>
                        <template #footer>
                            <n-button type="primary" strong secondary class="w-100" @click="resetPassword">
                                {{ $t("rp_btn") }}
                            </n-button>
                        </template>
                        <template #action>
                            <n-button text @click="gosingIn">
                                <n-space>
                                    <n-icon :component="ArrowBack" />
                                    <span>{{$t('rp_back_btn')}}</span>
                                </n-space>
                            </n-button>
                        </template>
                    </n-card>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>
  
  <script>
  import { defineComponent, ref } from 'vue'
  import { ArrowBack,At } from '@vicons/ionicons5'
  import { emailOptions } from '../../utils/index'
  import { useStore } from 'vuex'
  export default defineComponent({
      components: {
          ArrowBack,At
      },
      setup() {
        const data = ref({email: ""});
        const {dispatch,commit} = useStore();
          return {
              data,
              ArrowBack,
              At,
              emailOptions: emailOptions(data),
              resetPassword() {
                  dispatch("auth/resetPass", data.value.email)
                  .then(data => {
                      commit("setAlert", {
                          show: true,
                          title: "Success",
                          message: data.message,
                          type: "success"
                      });
                  })
                    .catch((err) => {
                        commit("setAlert", {
                            show: true,
                            title: "Error",
                            message: err.message,
                            type: "error"
                        });
                    })
              },
          }
      },
      methods: {
          gosingIn() {
              this.$router.push('/auth')
          }
      },
      computed: {
          alert() {
              return this.$store.state.alert
          }
      },
  })
  </script>