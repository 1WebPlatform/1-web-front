<template>
    <div class="alert-wrapper">
        <div class="alert" v-for="elem in alert" :key="elem.id">
            <h3 class="alert-title"> {{elem.name}}</h3>
            <p class="alert-description">{{elem.description}}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { alert } from './alert';
export default {
    setup() {
        return alert()
    }
}
</script>
<style lang="scss">
    .alert{

    }
</style>