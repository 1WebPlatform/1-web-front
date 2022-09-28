import { Ref } from "vue";
import { getCms } from "~~/src/libs/get_cms";
export function button(id: Ref<number>) {
    const { cms } = getCms(id.value);
    return { cms }
}