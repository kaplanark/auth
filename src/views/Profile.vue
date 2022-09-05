<template>
    <div>
        {{profile}}
        <button @click="getdata">get</button>
    </div>
</template>
<script>
import { defineComponent, ref} from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
    setup() {
        const profile =ref({})
        const { state } = useStore();
        const getdata =()=>{
            console.log(state.auth.userData);
        }
        return {
            profile,
            getdata
        }
    },
})
</script>