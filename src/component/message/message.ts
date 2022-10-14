import { Ref, computed } from "vue";
import { TypeEvent } from "~~/src/enum/TypeEvent";
import { getCms } from "~~/src/libs/getCms";
import { loaderCss } from "~~/src/libs/loaderCss";
import { eventBuild } from "~~/src/service/eventComponent/eventBuild";

export function message(id: Ref<number>) {
    const { cms } = getCms(id.value);
    const { startEvent } = eventBuild(id.value);
    loaderCss(id.value);
    const textOk = computed(() => {
        return cms.value.params.name_ok ?? "Ок"
    })
    const textCancel = computed(() => {
        return cms.value.params.name_cancel ?? "Отмена"
    })
    const clickOk = startEvent(TypeEvent.click_ok);
    const clickCancel = startEvent(TypeEvent.click_cancel);
    return { cms, textOk, textCancel, clickOk, clickCancel }
}