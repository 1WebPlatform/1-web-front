import { Ref } from "vue";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";
import { getCms } from "~~/src/libs/getCms";
import { saveContextComponent } from "~~/src/libs/saveContextComponent";
import { ObjectAny } from "~~/src/model/objectAny";
export function button(id: Ref<number>, context: Ref<ObjectAny>) {
    const { cms } = getCms(id.value);
    const { click } = eventBuild(id.value);
    saveContextComponent(id.value, context.value);
    return { cms, click }
}