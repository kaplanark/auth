<template>
    <n-layout content-style="height:100vh" class="login-content">
        <n-layout-content class="h-100">
            <n-grid class="h-100 d-flex align-center" cols="24" item-responsive responsive="screen">
                <n-grid-item span="22 s:12 m:10 l:8 xl:8" offset="1 s:6 m:7 l:8 xl:8">
                    <n-result status="404" :title="$t('page_not_found')" :description="$t('page_not_found_desc')">
                        <template #footer>
                            <n-button text type="primary" @click="goBack">{{$t('go_back')}}</n-button>
                        </template>
                    </n-result>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    methods: {
        goBack() {
            this.$router.push('/auth')
        }
    }
})
</script>