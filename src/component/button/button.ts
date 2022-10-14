import { Ref } from "vue";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";
import { getCms } from "~~/src/libs/getCms";
import { ObjectAny } from "~~/src/model/objectAny";
import { loaderCss } from "~~/src/libs/loaderCss";
import { TypeEvent } from "~~/src/enum/TypeEvent";
export function button(id: Ref<number>, context: Ref<ObjectAny>) {
    const { cms } = getCms(id.value);
    loaderCss(id.value);
    const { startEvent } = eventBuild(id.value);
    const click = startEvent(TypeEvent.click);
    return { cms, click }
}