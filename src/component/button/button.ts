import { Ref } from "vue";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";
import { getCms } from "~~/src/libs/get_cms";
export function button(id: Ref<number>) {
    const { cms } = getCms(id.value);
    const { click } = eventBuild(id.value);

    return { cms, click }
}