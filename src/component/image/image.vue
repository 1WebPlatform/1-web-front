<template>
    <object v-if="typeImage === 'svg'" type="image/svg+xml" :data="loaderImage(url)">
        <img :src="loaderImage(url)">
    </object>
    <img v-else :src=" loaderImage(url)">
</template>
<script lang="ts">
import { loaderImage } from "~~/src/libs/loaderImage";
import { image } from "./image"
export default {
    props: {
        url: { type: String }
    },
    setup(props) {
        const { url } = toRefs(props);
        return {
            loaderImage,
            ...image(url),
        }
    }
}
</script>