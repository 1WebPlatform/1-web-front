<template>
    <div class="alert-wrapper">
        <Alert 
            v-for="(elem, index) in alert" 
            :index="index"
            :key="elem.id"
            :alert="elem" 
        />
    </div>
</template>
<script lang="ts">
import Alert from '~~/src/component/alert/alert.vue'
import { alertWrapper } from './alert-wrapper';
export default {
    components: {
        Alert
    },
    setup() {
        return alertWrapper()
    }
}
</script>
<style lang="">
    
</style>