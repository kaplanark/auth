<template>
    <n-layout content-style="height:100vh" class="login-content">
        <n-layout-content class="h-100">
            <n-grid class="h-100 d-flex align-center" cols="24" item-responsive responsive="screen">
                <n-grid-item span="22 s:12 m:10 l:8 xl:8" offset="1 s:6 m:7 l:8 xl:8">
                    <n-card :title="$t('rp_title')" class="shadow-sm">
                        <template #cover>
                            <img src="../assets/bg.png">
                        </template>
                        <p class="mb-2">
                            {{ $t("rp_text") }}
                        </p>
                        <n-input v-model:value="email" type="email" :placeholder="$t('rp_input_placeholder')" />
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
  import { ArrowBack } from '@vicons/ionicons5'
  export default defineComponent({
      components: {
          ArrowBack
      },
      setup() {
          return {
              email: ref(''),
              ArrowBack
          }
      },
      methods: {
          resetPassword() {
  
          },
          gosingIn() {
              this.$router.push('/authentication')
          }
      },
  })
  </script>