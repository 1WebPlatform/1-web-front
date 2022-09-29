import { Ref } from "vue";
export function tableTh(id: Ref<number>, schema: Ref<any>) {
    const style = computed(() => {
        return {
            width: `${schema.value.w}px`
        }
    })
    return {
        style
    }
}