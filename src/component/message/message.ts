import { Ref } from "vue";
import { getCms } from "~~/src/libs/getCms";

export function message(id: Ref<number>) {
    const { cms } = getCms(id.value);
    return { cms }
}