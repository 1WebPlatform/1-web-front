import { Ref } from "vue";

export function image(url: Ref<string>) {
    const typeImage = computed(() => {
        return url.value.split('.').pop();
    })
    return {
        typeImage
    }
}