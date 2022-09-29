<template>
    <button @click="click" :title="cms?.params?.title" class="button">
        <div class="button-text">{{cms?.params?.text}}</div>
        <div class="button-container-image">
            <img class="button-image" src="" alt="">
        </div>
    </button>
</template>
<script lang="ts">
import { toRefs } from "vue";
import { button } from "./button";
export default {
    props: {
        id: { type: Number }
    },
    setup(props) {
        const { id } = toRefs(props);
        return {
            ...button(id)
        }
    }
}
</script>
<style lang="scss">

</style>