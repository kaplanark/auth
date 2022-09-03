<template>
  <n-config-provider :theme="theme">
    <router-view></router-view>
    <n-button @click="swichTheme" class="theme-button" circle>
      <template v-if="theme === null">
        <n-icon size="20">
          <moon />
        </n-icon>
      </template>
      <template v-else>
        <n-icon size="20">
          <sunny />
        </n-icon>
      </template>
    </n-button>
  </n-config-provider>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Moon, Sunny } from '@vicons/ionicons5'
import { darkTheme } from 'naive-ui'
export default defineComponent({
  components: {
    Moon,
    Sunny
  },
  setup() {
    const theme = ref(null)
    const swichTheme = () => {
      theme.value = theme.value === null ? darkTheme : null;
      sessionStorage.setItem('theme', theme.value === null ? 'light' : 'dark');
    }
    return {
      darkTheme: ref(darkTheme),
      theme,
      swichTheme,
      Moon,
      Sunny
    }
  },
  // @click="$i18n.locale = 'en'"
  created() {
    const theme = sessionStorage.getItem('theme');
    if (theme === 'dark') {
      this.theme = this.darkTheme;
    }
  },
})
</script>