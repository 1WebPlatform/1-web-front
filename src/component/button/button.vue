<template>
    <button @click="click" :title="cms?.params?.title" class="button">
        <div class="button-text" v-if="cms?.params?.text">{{cms?.params?.text}}</div>
        <Image class="button-image" :url=cms?.params?.icons></Image>
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
.button {
    height: 16px;
    margin: 0;
    padding: 0;
    background: transparent;
    border: 0;
    cursor: pointer;
}

.button-image {
    height: 100%;
}
</style>