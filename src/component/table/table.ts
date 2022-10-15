import { Ref } from "vue";
import { TypeEvent } from "~~/src/enum/TypeEvent";
import { getCms } from "~~/src/libs/getCms";
import { loaderCss } from "~~/src/libs/loaderCss";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";

export function table(id: Ref<number>) {
    const { cms } = getCms(id.value);
    const { startEvent } = eventBuild(id.value);
    loaderCss(id.value);
    (async () => {
        await startEvent(TypeEvent.create)();
    })();
    return { cms }
}