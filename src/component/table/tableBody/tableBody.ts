import { Ref } from "vue";
import { getCms } from "~~/src/libs/getCms";
export function tableBody(id: Ref<number>) {
    const { cms } = getCms(id.value);
    return { cms };
}