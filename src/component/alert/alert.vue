<template>
    <div class="alert" :class="'alert-' + alert.type">
        <h3 class="alert-title"> {{alert.name}}</h3>
        <p class="alert-description">{{alert.description}}</p>
        <div class="alert-close" @click="close(index)">&#x2715</div>
    </div>
</template>
<script lang="ts">
import { alert } from './alert';
export default {
    props:{
        alert: {type: Object},
        index: { type: Number}
    },
    setup() {
        return alert()
    }
}
</script>