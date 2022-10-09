<template>
    <button @click="click" :title="cms?.params?.title" class="button">
        <div class="button-text" v-if="cms?.params?.text">{{cms?.params?.text}}</div>
        <div class="button-container-image" v-if="cms?.params?.icons">
            <Image :url=cms?.params?.icons></Image>
        </div>
    </button>
</template>
<script lang="ts">
import { loaderImage } from "~~/src/libs/loaderImage"
import { toRefs } from "vue";
import { button } from "./button";
import Image from "../image/image.vue";
export default {
    props: {
        id: { type: Number },
        context: {}
    },
    setup(props) {
        const { id, context } = toRefs(props);
        return {
            ...button(id, context),
            loaderImage
        };
    },
    components: { Image }
}
</script>
<style lang="scss">

</style>