import { Ref } from "nuxt/dist/app/compat/capi";
import { getCms } from "~~/src/libs/getCms";

export function tableHeader(id: Ref<number>) {
    const { cms } = getCms(id.value);
    return { cms }
}